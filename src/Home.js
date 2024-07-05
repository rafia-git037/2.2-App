// Home.js
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
