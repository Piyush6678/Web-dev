# Chat Application - Backend

This is the backend server for the Chat Application, built with Node.js, Express, and Socket.io. It handles authentication, real-time messaging, status updates, and file uploads.

## 🚀 Features

- **Real-time Communication**: Powered by [Socket.io](https://socket.io/) for instant messaging and status updates.
- **RESTful API**: Endpoints for user management, chat history, and status.
- **Authentication**: JWT-based authentication with secure cookie storage.
- **File Uploads**: Image uploads using [Multer](https://github.com/expressjs/multer) and [Cloudinary](https://cloudinary.com/).
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) schemas.
- **Security**: CORS, encrypted passwords (bcryptjs), and HttpOnly cookies.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Real-time**: Socket.io
- **Auth**: JWT, Passport, Google OAuth2.0
- **Cloud Storage**: Cloudinary
- **Notifications**: Twilio (SMS), Nodemailer (Email)

## 📂 Project Structure

- **`config/`**: Database and Cloudinary configuration.
- **`models/`**: Mongoose models (`User`, `Message`, `Conversation`, etc.).
- **`src/`**
  - **`routes/`**: API route definitions (`userRoute`, `chatRoutes`, `statusRoute`).
  - **`controllers/`**: Request handling logic.
  - **`middlewares/`**: Auth checks (`authMiddleware`, `socketAuthMiddleware`).
  - **`services/`**: logic like socket handling, email, and twilio integration.
- **`utils/`**: Helper functions.
- **`index.js`**: Server entry point.

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js installed.
- MongoDB instance (local or Atlas).
- Cloudinary account.
- Twilio account (optional for SMS).

### 2. Installation
Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of the `server` directory.

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chat-app
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key

# Cloudinary Config
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Config (Nodemailer)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# Twilio Config (Optional)
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

### 4. Running the Server

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

## 📡 Key API Routes

### Auth (`/api/users`)
- `POST /register`: Register a new user.
- `POST /login`: Login user.
- `GET /me`: Get current user info.

### Chat (`/api/chats`)
- `POST /send`: Send a message.
- `GET /:conversationId`: Get messages for a conversation.

### Status (`/api/status`)
- `POST /create`: Create a new status.
- `GET /`: Get all active statuses.

## 🔌 Socket Events

The server listens for the following events:
- **`connection`**: Triggered when a client connects.
- **`user_connected`**: Client sends userId to map socket.
- **`send_message`**: Sends a message to a recipient.
- **`typing_start` / `typing_stop`**: Typing indicators.
- **`add_reaction`**: React to messages.
- **`disconnect`**: Cleans up user session.
