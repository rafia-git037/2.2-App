import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the combined CSS file

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo">
          <img src="/images/logo.jpg" alt="BookLine logo" />
          <span>BookLine</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/wishlist">My Wishlist</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </nav>
        <button className="login-btn">LOG IN</button>
      </div>
    </header>
  );
}

export default Navbar;
