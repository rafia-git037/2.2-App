// Home.js
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="home">
      <h1>Welcome to BookStore</h1>
      <button className="search-button" onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Home;
*/

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import logoImage from './images/logo.jpg';
import { ToastContainer } from 'react-toastify';
import { useAuth } from './AuthContext';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="home">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo-container">
            <img src={logoImage} alt="BookLine logo" className="logo-image" />
            <span className="logo-text">BookLine</span>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/search">Search & Wishlist</Link>
            <Link to="/profile">User Profile</Link>
            <Link to="#">About us</Link>
            <Link to="#">Contact us</Link>
          </nav>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="login-btn">LOG OUT</button>
          ) : (
            <Link to="/login" className="login-btn">LOG IN</Link>
          )}
        </div>
      </header>
    
      <ToastContainer />
    </div>
  );
};

export default Home;

