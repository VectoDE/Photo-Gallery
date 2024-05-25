# Photo Gallery

Welcome to the **Photo Gallery** repository! This project provides a modern and responsive photo gallery application, allowing users to upload, view, and manage their photos seamlessly.

## Features

- **Photo Upload**: Upload photos to your personal gallery.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Photo Management**: Organize photos into albums and manage them with ease.
- **Search Functionality**: Search for photos by title or tags.
- **Image Viewer**: View photos in full-screen mode with navigation controls.
- **User Authentication**: Secure login and registration system to protect user data.
- **Favorites**: Mark photos as favorites for quick access.
- **Comments**: Add and view comments on photos.

## Technologies

- **Frontend**: HTML5, CSS3, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Storage**: AWS S3 or local storage
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Netlify, Vercel, Heroku

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/photo-gallery.git
   cd photo-gallery
   ```

2. **Install frontend dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd ../server
   npm install
   ```

4. **Configure the environment variables**:
   - Create a `.env` file in the `server` directory and add your MongoDB URI, JWT secret, and AWS S3 credentials if using S3 for storage.
   ```
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   S3_BUCKET_NAME=your_s3_bucket_name
   ```

5. **Run the backend server**:
   ```bash
   npm start
   ```

6. **Run the frontend application**:
   ```bash
   cd ../client
   npm start
   ```

7. **Access the application**:
   - Navigate to `http://localhost:3000` in your web browser.

## Usage

1. Sign up for a new account or log in if you already have one.
2. Upload photos to your gallery and organize them into albums.
3. Use the search bar to find specific photos by title or tags.
4. View photos in full-screen mode and navigate through your gallery.
5. Mark photos as favorites and add comments to share your thoughts.

## Project Structure

- `client/`: React.js frontend source code
- `server/`: Node.js backend source code
- `public/`: Public assets and static files
- `models/`: MongoDB models for storing user data and photos
- `routes/`: API routes for the backend

## License

This project is licensed under the MIT License – see the [LICENSE.md](LICENSE.md) file for details.
