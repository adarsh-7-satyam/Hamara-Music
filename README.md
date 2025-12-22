# 🎵 Hamara Music — Web Music Player

Hamara Music is a full-stack web-based music streaming application inspired by modern music platforms like Spotify.
It allows users to sign up, verify their email using OTP, log in securely, and enjoy music through a clean, responsive UI.

This project is built mainly for learning, practice, and portfolio demonstration purposes. This project is an extension of a group college project created by me and my friends Harsh and Aditya.


------------------------------------------------------------


FEATURES

Authentication & Security
- User Sign Up with:
  - Full Name
  - Email
  - Password
  - Date of Birth
- Email verification using OTP
- Secure Login & Logout
- Password hashing using bcrypt
- Email verification required before login
- Personalized greeting after login
  Example: Welcome <User Name>



Music Player
- Play / Pause music
- Next & Previous track controls
- Seek bar with real-time progress
- Volume control
- Song duration display
- Sidebar song list
- Album-based playlist system



Albums & Playlists
- Songs are organized in album folders
- Each album contains:
  - .mp3 files
  - cover.jpg
  - info.json (album metadata)
- You can:
  - Add your own songs
  - Create new albums
  - Update album details
- Playlists are loaded dynamically




UI & UX
- Playlist search functionality
- Responsive design (mobile + desktop)
- Hamburger menu for small screens
- Clean Spotify-like UI
- Custom branding (Hamara Music)

------------------------------------------------------------

TECHNOLOGIES USED

Frontend
- HTML5
- CSS3
- Vanilla JavaScript

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt (password hashing)
- Nodemailer (OTP email sending)

------------------------------------------------------------

FOLDER STRUCTURE

```text
Hamara-music/
│
├── backend/
│   ├── models/
│   │   └── User.js              # MongoDB user schema
│   ├── routes/
│   │   └── auth.js              # Authentication routes
│   ├── utils/
│   │   └── sendEmail.js         # OTP email logic
│   ├── server.js                # Express server entry point
│   ├── package.json
│   └── node_modules/
│
├── css/
│   ├── style.css                # Main styling
│   └── utility.css              # Utility/helper classes
│
├── js/
│   └── script.js                # Frontend logic (player + auth)
│
├── img/
│   ├── logo.svg                 # Hamara Music logo
│   ├── favicon.ico              # Browser tab icon
│   └── icons/                   # SVG/PNG icons
│
├── songs/
│   └── ncs/
│       ├── song1.mp3
│       ├── song2.mp3
│       ├── cover.jpg
│       └── info.json            # Album metadata
│   └── (you can add more albums here)
│
├── index.html                   # Main frontend entry file
└── README.md

```

------------------------------------------------------------

HOW TO CLONE AND RUN THE PROJECT (STEP BY STEP)

PREREQUISITES
- Node.js installed
- MongoDB (Atlas or local)
- VS Code
- Live Server extension in VS Code

STEP 1: CLONE THE REPOSITORY

Open terminal or command prompt and run:


```bash
git clone https://github.com/adarsh-7-satyam/Hamara-Music.git
```

This will create a new folder named Hamara-Music on your system containing all project files.


```bash
cd hamara-music
```

------------------------------------------------------------

STEP 2: INSTALL BACKEND DEPENDENCIES

```bash
cd backend
npm install
```
------------------------------------------------------------

STEP 3: CREATE ENVIRONMENT VARIABLES

Inside the backend folder, create a file named .env

Add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

IMPORTANT:
- Do NOT upload .env to GitHub
- Use MongoDB Atlas or local MongoDB

------------------------------------------------------------

STEP 4: RUN THE BACKEND SERVER

Run the following command:

```bash
node server.js
```

If successful, you will see:

Server running on port 5000
MongoDB connected

Backend runs on:
http://localhost:5000

------------------------------------------------------------

STEP 5: RUN THE FRONTEND USING LIVE SERVER

1. Open the project folder in VS Code
2. Go to **Extensions** (left sidebar)
3. Search **“Live Server”**
4. Install the extension authored by **Ritwick Dey**
5. Open index.html
6. Right-click on index.html
7. Click "Open with Live Server"

Frontend runs on:
http://127.0.0.1:5500/index.html

------------------------------------------------------------

IMPORTANT RUN ORDER

1. First start backend server (node server.js)
2. Then open index.html using Live Server

Authentication will NOT work if backend is not running.

------------------------------------------------------------

ADDING YOUR OWN MUSIC OR ALBUMS

To add a new album:
1. Go to songs/ folder
2. Create a new folder (example: my-album)
3. Add:
   - .mp3 files
   - cover.jpg
   - info.json

Sample info.json:

{
  "title": "My Album",
  "description": "My custom playlist"
}

Album will automatically appear on homepage.

------------------------------------------------------------

COPYRIGHT & MUSIC USAGE DISCLAIMER

- This project does NOT promote piracy.
- All music files currently included in this repository are
  NON-COPYRIGHT / ROYALTY-FREE (NCS) tracks.
- These tracks are included only for:
  - Testing the music player
  - Demonstration purposes
  - Avoiding copyright issues on GitHub

USING YOUR OWN MUSIC
- You are free to add your own .mp3 files inside album folders.
- You can:
  - Replace existing songs
  - Create new albums
  - Listen to your personal music locally

------------------------------------------------------------

NOTES

- MongoDB free tier has no fixed expiry
- Backend must be running for authentication features
- Frontend alone cannot handle login/signup

------------------------------------------------------------

PROJECT PURPOSE

- Full-stack learning
- Authentication & OTP practice
- Frontend + backend integration
- Portfolio showcase

------------------------------------------------------------

Built with ❤️ by Adarsh — Hamara Music



