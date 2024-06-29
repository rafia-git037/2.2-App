import React from 'react';
import './Home.css';

const Home = ({ onSearchClick }) => {
  return (
    <div className="home">
      <h1>Welcome to BookStore</h1>
      <button className="search-button" onClick={onSearchClick}>Search</button>
    </div>
  );
};

export default Home;
