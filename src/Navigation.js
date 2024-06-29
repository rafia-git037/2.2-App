// Navigation.js

import React from 'react';
import logoImage from './images/logo.jpg';

const Navigation = ({ onSearchClick }) => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logoImage} alt="BookLine logo" className="logo-image" />
          <span className="logo-text">BookLine</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#" onClick={onSearchClick}>Search & Wishlist</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </nav>
        <button className="login-btn">LOG IN</button>
      </div>
    </header>
  );
}

export default Navigation;
