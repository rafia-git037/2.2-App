import React, { useState, useEffect } from 'react';
import './App.css';
import { Book } from './book';
import Home from './Home';
import Navigation from './Navigation';
import SearchPage from './SearchPage';

// Import images
import searchBgImage from './images/search-page-bg.jpg';

const initialBooks = JSON.parse(localStorage.getItem('books')) || Book;

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [query, setQuery] = useState("");
  console.log(query);
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesScreen, setShowFavoritesScreen] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editBook, setEditBook] = useState(null);

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
  };

  const handleBackClick = () => {
    setShowSearchPage(false);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="App">
      <Navigation onSearchClick={handleSearchClick} />

      {!showSearchPage ? (
        <Home onSearchClick={handleSearchClick} />
      ) : (
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
      )}
    </div>
  );
}

export default App;
