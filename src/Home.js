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
    <p>Your one-stop destination for all your book needs. Whether you're looking for the latest bestsellers, timeless classics, or something more niche, we have it all. Dive into a world of knowledge and imagination with our vast collection of books. Happy reading!</p>
      <button className="search-button" onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Home;
