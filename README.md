# Syncthreads-Assignment-App
# React Dashboard with Map Integration

## Project Overview
This project is a **React (Vite) + Express.js** web application that includes a dashboard and a map of India. It features secure authentication using JWT and integrates an interactive map using **Leaflet**. The goal is to showcase user authentication, protected routes, and seamless map interaction.

## Features
- **User Authentication**
  - Signup and login functionality
  - JWT-based authentication
  - Protected routes for authorized users only

- **Dashboard**
  - Displays user-specific information
  - Interactive card components
  - Clicking on a card navigates to the map view

- **Map Integration**
  - Displays a map of India using Leaflet
  - Zoom in/out functionality

## Tech Stack
### Frontend (Vite + React)
- React with Vite for fast development
- React Router for navigation
- Bootstrap for UI styling
- Leaflet for map integration
- React Toastify for notifications

### Backend (Node.js + Express.js)
- Express.js for API endpoints
- JSON Web Token (JWT) for authentication
- MongoDB
- CORS for cross-origin request handling

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- npm or yarn

### Steps to Run
#### 1. Clone the repository
```sh
git clone https://github.com/farazsfa007/Syncthreads-Assignment-App.git
cd your-repo
```

#### 2. Setup Frontend
```sh
cd frontend
npm install
npm run dev
```
- The frontend runs on `https://syncthreads-assignment-app-ui.vercel.app`

#### 3. Setup Backend
```sh
cd backend
npm install
node index.js
```
- The backend runs on `https://syncthreads-assignment-app-api.vercel.app/auth`

## API Endpoints
### Authentication
- **POST** `/auth/signup` - Register a new user
- **POST** `/auth/login` - Authenticate user and return JWT token

### Dashboard & Map
- **GET** `/dashboard` - Fetch dashboard data
- **GET** `/map` - Fetch map-related data

## Deployment
- **Frontend Deployment:** Vercel Hosting
- **Backend Deployment:** Vercel

## Future Enhancements
- Implement user role-based access
- Add geolocation features for better interactivity
- Improve UI/UX with advanced animations and data visualization

## Contributors
- Syed Faraz Ahmad (@farazsfa007)



