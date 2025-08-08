import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
import UserLayout from './layouts/UserLayout';
import MyPlaylist from './pages/MyPlaylist';
import UploadVideo from './pages/UploadVideo';
// import MyWatchlist from './pages/MyWatchlist';
import TopNavbar from './components/TopNavbar';

function App() {
  const isAuthenticated = true; // Replace this with actual logic later

  return (
    <Router>
      <TopNavbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> */}

        {/* Protected User Routes */}
        {isAuthenticated ? (
          <Route path="/user" element={<UserLayout />}>
            <Route path="playlist" element={<MyPlaylist />} />
            <Route path="upload" element={<UploadVideo />} />
            {/* <Route path="watchlist" element={<MyWatchlist />} /> */}
          </Route>
        ) : (
          <Route path="/user/*" element={<Navigate to="/" replace />} />
        )}

        {/* Catch-all redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
