// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { Book } from './book'; // Assuming Book data is imported correctly
import Table from './Table';
import FavoritesList from './FavoritesList';
import Home from './Home';
import Navigation from './Navigation'; // Import the Navigation component

// Import images
import searchBgImage from './images/search-page-bg.jpg';

const initialBooks = Book; // Assuming Book data is correctly exported/imported

function App() {
  // State variables
  const [books, setBooks] = useState(initialBooks);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesScreen, setShowFavoritesScreen] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBook, setNewBook] = useState({
    Name: "",
    Writer: "",
    Price: ""
  });

  // Simulate loading effect with useEffect
  useEffect(() => {
    const bgImg = new Image();
    bgImg.src = searchBgImage;
    bgImg.onload = () => setBgLoaded(true);
  }, []);

  // Handle click to toggle favorite status
  const handleFavouriteClick = (id) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, isFavourite: !book.isFavourite } : book
      )
    );
  };

  // Toggle favorites screen visibility
  const toggleFavoritesScreen = () => {
    setShowFavoritesScreen(!showFavoritesScreen);
  };

  // Handle delete favorite book
  const handleDeleteFavorite = (id) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, isFavourite: false } : book
      )
    );
  };

  // Handle adding a new book
  const handleAddBook = () => {
    if (newBook.Name && newBook.Writer && newBook.Price) {
      const newBookObj = {
        id: books.length + 1,
        Name: newBook.Name,
        Writer: newBook.Writer,
        Price: parseFloat(newBook.Price).toFixed(2),
        isFavourite: false
      };
      setBooks([newBookObj, ...books]);
      setNewBook({
        Name: "",
        Writer: "",
        Price: ""
      });
      setShowAddForm(false);
    } else {
      alert("Please enter all fields to add a new book.");
    }
  };

  // Handle input change in add book form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  // Filter books based on search query
  const filteredBooks = books.filter(book =>
    book.Name.toLowerCase().includes(query.toLowerCase()) ||
    book.Writer.toLowerCase().includes(query.toLowerCase())
  );

  // Filter favorite books
  const favoriteBooks = books.filter(book => book.isFavourite);

  // Handle search button click to show search page
  const handleSearchClick = () => {
    setShowSearchPage(true);
  };

  // Handle back button click to navigate back to home
  const handleBackClick = () => {
    setShowSearchPage(false);
  };

  // Toggle add form visibility
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="App">
      {/* Navigation component */}
      <Navigation onSearchClick={handleSearchClick} />

      {/* Conditional rendering for home screen or search page */}
      {!showSearchPage ? (
        <Home onSearchClick={handleSearchClick} />
      ) : (
        <>
          {/* Main content section for search page */}
          <div className="search-page" style={{ backgroundImage: `url(${searchBgImage})` }}>
            {/* Toolbar with search input, favorite button, and back button */}
            <div className="toolbar">
              <input
                type="text"
                placeholder="Search..."
                className="search"
                id="search"
                name="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />

              <button
                className={`favourite-button ${favorites.length > 0 ? 'active' : ''}`}
                onClick={toggleFavoritesScreen}
                aria-label={`${showFavoritesScreen ? 'Close favorites' : 'View favorites'}`}
              >
                {showFavoritesScreen ? 'Close Favorites' : 'View Favorites'}
              </button>

              <button
                className="back-button"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>

            {/* Conditional rendering for add form, favorites list, or filtered book table */}
            {showAddForm ? (
              <div className="add-book-form">
                <input
                  type="text"
                  placeholder="Book Name"
                  name="Name"
                  value={newBook.Name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Writer"
                  name="Writer"
                  value={newBook.Writer}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Price"
                  name="Price"
                  value={newBook.Price}
                  onChange={handleInputChange}
                />
                <button className="add-button" onClick={handleAddBook}>
                  Add Book
                </button>
              </div>
            ) : (
              <>
                <div className="toolbar-actions">
                  <button
                    className="add-button"
                    onClick={toggleAddForm}
                  >
                    Add
                  </button>

                  <button
                    className="delete-button"
                    onClick={handleDeleteFavorite}
                  >
                    Delete
                  </button>
                </div>

                {/* Conditional rendering for favorites list or filtered book table */}
                {showFavoritesScreen ? (
                  <div className="favorites-section">
                    <h2>Favorite Books:</h2>
                  
                    {favoriteBooks.length > 0 ? (
                      <FavoritesList
                        books={favoriteBooks}
                        onDeleteClick={handleDeleteFavorite}
                      />
                    ) : (
                      <p>No favorite books selected.</p>
                    )}
                  </div>
                ) : (
                  <Table books={filteredBooks} onFavouriteClick={handleFavouriteClick} />
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
