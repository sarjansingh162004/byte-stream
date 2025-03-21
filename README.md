# 🎥 Video Streaming Platform

## 📌 Overview
A full-featured video streaming platform that allows users to upload, share, and stream videos seamlessly. The platform includes user authentication, video categorization, search functionality, and real-time comments to enhance user interaction.

## ✨ Features
- 🔑 **User Authentication:** Secure sign-up and login using JWT for token-based authentication.
- 📹 **Video Upload & Streaming:** Users can upload videos, and the platform ensures high-quality playback with minimal buffering.
- 📂 **Video Categorization:** Videos are categorized for easy navigation and discovery.
- 🔍 **Search Functionality:** Users can search for videos based on keywords and categories.
- 💬 **Real-Time Comments:** Enables interactive discussions through a live commenting system.

## 🛠 Tech Stack
- **Frontend:** React.js ⚛️
- **Backend:** Node.js, Express.js 🚀
- **Database:** MongoDB 🍃
- **Authentication:** JWT (JSON Web Tokens) 🔐, bcrypt.js (for secure password hashing)
- **Storage & Streaming:** Cloudinary ☁️

## 🚀 Installation & Setup
### 📌 Prerequisites
Ensure you have the following installed on your system:
- Node.js 🟢
- MongoDB 🍃

### 📥 Steps to Run the Project
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/video-streaming-platform.git
   cd video-streaming-platform
   ```

2. **Backend Setup:**
   ```sh
   cd backend
   npm install
   npm start
   ```

3. **Frontend Setup:**
   ```sh
   cd frontend
   npm install
   npm start
   ```

## 🔑 Environment Variables
Create a `.env` file in the backend directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🎯 Usage
- 📝 Sign up or log in to the platform.
- 🎬 Upload videos with appropriate titles and categories.
- 📺 Stream videos smoothly with minimal buffering.
- 🔍 Search for videos using keywords.
- 💬 Engage with other users through real-time comments.

## 🤝 Contributing
Pull requests are welcome! If you’d like to contribute, follow these steps:
1. 🍴 Fork the repository.
2. 🌱 Create a new branch (`feature-branch`).
3. 📝 Commit your changes (`git commit -m 'Add new feature'`).
4. 🚀 Push to the branch (`git push origin feature-branch`).
5. 🔄 Create a pull request.

## 📧 Contact
For any questions or feedback, feel free to reach out via [sarjan.iitism@gmail.com] 📩 or open an issue on GitHub 🐙.

