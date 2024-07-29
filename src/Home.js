// Home.js
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
            <Link to="/favorites">Wishlist</Link>
            <Link to="/profile">User Profile</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
          </nav>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="login-btn">LOG OUT</button>
          ) : (
            <Link to="/login" className="login-btn">LOG IN</Link>
          )}
        </div>
      </header>
    
      <div className="home-content">
        <h1>Welcome to BookLine</h1>
        <p>Explore and manage your favorite books.</p>
        <div className="home-buttons">
          <button className="home-button" onClick={handleSearchClick}>Search Books</button>
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default Home;
