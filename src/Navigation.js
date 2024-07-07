// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './images/logo.jpg';
import './Navigation.css';

const Navigation = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logoImage} alt="BookLine logo" className="logo-image" />
          <span className="logo-text">BookLine</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/search">Search & Wishlist</Link>
          <Link to="/profile">User Profile</Link> {/* Link to UserProfile */}
          <Link to="#">About us</Link>
          <Link to="#">Contact us</Link>
        </nav>
        <Link to="/login" className="login-btn">LOG IN</Link>
      </div>
    </header>
  );
};

export default Navigation;
