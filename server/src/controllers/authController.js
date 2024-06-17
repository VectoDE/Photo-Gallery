const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const { generateToken, generateExpiredToken } = require('../utils/jwt.js');

// Register user
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ $or: [{ username }, { email }] });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            username,
            email,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const token = generateToken(user);

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Login user
exports.login = async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        let user = await User.findOne({
            $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
        });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const token = generateToken(user);

        // Set token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 3600000, // 1 hour in milliseconds
            secure: process.env.NODE_ENV === 'production', // set to true in production environment
        });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Logout user
exports.logout = async (req, res) => {
    try {
        // Clear token by clearing the cookie
        res.clearCookie('token');

        // For now, returning a success message
        res.json({ msg: 'Logout successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
