const express = require('express');
const connectDB = require('./database/connect.js');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes.js'));
app.use('/api/user', require('./routes/userRoutes.js'));
app.use('/api/photos', require('./routes/photoRoutes.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
