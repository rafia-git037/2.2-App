import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import { Book } from './book';
import Home from './Home';
import Navigation from './Navigation';
import SearchPage from './SearchPage';

import Login from './Login'; 
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

// Import images
import searchBgImage from './images/search-page-bg.jpg';

const initialBooks = JSON.parse(localStorage.getItem('books')) || Book;

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesScreen, setShowFavoritesScreen] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editBook, setEditBook] = useState(null);
  const [showNavigationBar, setShowNavigationBar] = useState(true);

  useEffect(() => {
    const bgImg = new Image();
    bgImg.src = searchBgImage;
    bgImg.onload = () => setBgLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleFavouriteClick = (id) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, isFavourite: !book.isFavourite } : book
      )
    );
  };

  const toggleFavoritesScreen = () => {
    setShowFavoritesScreen(!showFavoritesScreen);
  };

  const handleDeleteFavorite = (id) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, isFavourite: false } : book
      )
    );
  };

  const handleAddBook = (newBookObj) => {
    setBooks([newBookObj, ...books]);
  };

  const handleEditClick = (id) => {
    const bookToEdit = books.find(book => book.id === id);
    setEditBook(bookToEdit);
  };

  const handleSaveEdit = (editedBook) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === editedBook.id ? editedBook : book
      )
    );
    setEditBook(null);
  };

  const handleCancelEdit = () => {
    setEditBook(null);
  };

  const deleteBook = (id) => {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.Name.toLowerCase().includes(query.toLowerCase()) ||
    book.Writer.toLowerCase().includes(query.toLowerCase())
  );

  const favoriteBooks = books.filter(book => book.isFavourite);

  const handleSearchClick = () => {
    setShowSearchPage(true);
    setShowNavigationBar(false);
  };

  const handleBackClick = () => {
    setShowSearchPage(false);
    setShowNavigationBar(true);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <Router>
      <div className="App">
        {showNavigationBar && <Navigation />}
        <Routes>
          <Route path="/" element={<Home onSearchClick={handleSearchClick} />} />
          <Route path="/search" element={
            <SearchPage
              books={books}
              query={query}
              setQuery={setQuery}
              showAddForm={showAddForm}
              toggleAddForm={toggleAddForm}
              addBook={handleAddBook}
              editBook={editBook}
              saveEdit={handleSaveEdit}
              cancelEdit={handleCancelEdit}
              filteredBooks={filteredBooks}
              favoriteBooks={favoriteBooks}
              showFavoritesScreen={showFavoritesScreen}
              toggleFavoritesScreen={toggleFavoritesScreen}
              handleFavouriteClick={handleFavouriteClick}
              handleDeleteFavorite={handleDeleteFavorite}
              handleEditClick={handleEditClick}
              deleteBook={deleteBook}
              handleBackClick={handleBackClick}
            />
          } />
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route path="/signup" element={<Signup />} /> {/* Signup route */}
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ForgotPassword route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;