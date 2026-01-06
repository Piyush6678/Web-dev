# Chat Application - Frontend

This is the frontend client for the Chat Application, built with React, ensuring a responsive and interactive user experience.

## 🚀 Features

- **Real-time Messaging**: Instant chat using Socket.io.
- **User Authentication**: Secure login and registration.
- **Status Updates**: Share and view ephemeral status updates.
- **Video Calling**: Integrated video call functionality.
- **Responsive Design**: Styled with TailwindCSS and DaisyUI for mobile and desktop.
- **State Management**: Efficient global state handling with Zustand.

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/) (Create React App)
- **Styling**: [TailwindCSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Real-time**: [Socket.io Client](https://socket.io/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: React Icons
- **Notifications**: React Toastify

## 📂 Project Structure

The source code is organized as follows in `src/`:

- **`components/`**: Reusable UI components (e.g., specific views like `HomePage`, `UserDetails`).
- **`page/`**: Main application pages.
  - `user-login/`: Authentication pages.
  - `ChatSection/`: components related to the chat interface.
  - `StatusSection/`: Status update features.
  - `VideoCall/`: Video calling interface.
  - `SettingSection/`: User settings.
- **`store/`**: Global state management using Zustand.
  - `chatStore.js`: Manages chat messages and socket state.
  - `userStore.js` / `useLoginStore.js`: Authentication and user profile state.
- **`services/`**: API and external service integration.
  - `url.service.js`: Axios instance and API URL configuration.
  - `chat.service.js`: Socket instance management.
- **`utils/`**: Helper functions and constants.
- **`App.jsx`**: Main application component, handles routing and global socket initialization.
- **`main.jsx`**: Application entry point.

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have **Node.js** (v14 or higher) and **npm** installed.

### 2. Installation
Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of the `client` directory. Add the URL for your backend server:

```env
REACT_APP_API_URL=http://localhost:5000
```
> **Note**: Change `http://localhost:5000` to your actual backend server URL.

### 4. Running the App
Start the development server:

```bash
npm start
```
The application will run at [http://localhost:3000](http://localhost:3000).

## 🔄 Key Application Flows

### Authentication
- Uses `useLoginStore` and `userStore` for managing auth state.
- `App.jsx` checks for user presence and renders `ProtectedRoute` for authenticated routes (`/`, `/status`, etc.) or `PublicRoute` for login (`/user-login`).

### Real-time Chat
- Socket connection is initialized in `App.jsx` inside a `useEffect` hook when a user is logged in.
- `chatStore` listens for incoming messages and updates the UI in real-time.
- `chat.service.js` exports helpers to manage the socket connection.

### API Requests
- All HTTP requests use the `axiosInstance` defined in `services/url.service.js`, which is configured with the `REACT_APP_API_URL`.
