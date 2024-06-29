import React, { useState, useEffect } from 'react';
import './App.css';
import { Book } from './book'; // Assuming Book data is imported correctly
import Table from './Table';
import FavoritesList from './FavoritesList';
import Home from './Home';
import Navigation from './Navigation'; // Import the Navigation component
import EditBook from './EditBook'; // Import EditBook component

// Import images
import searchBgImage from './images/search-page-bg.jpg';

const initialBooks = JSON.parse(localStorage.getItem('books')) || Book; // Load books from localStorage or use initial data

function App() {
  // State variables
  const [books, setBooks] = useState(initialBooks);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesScreen, setShowFavoritesScreen] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editBook, setEditBook] = useState(null); // State for the book being edited
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

  // Save books to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

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

  // Handle edit book click
  const handleEditClick = (id) => {
    const bookToEdit = books.find(book => book.id === id);
    setEditBook(bookToEdit);
  };

  // Handle save edited book
  const handleSaveEdit = (editedBook) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === editedBook.id ? editedBook : book
      )
    );
    setEditBook(null); // Exit edit mode
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditBook(null); // Exit edit mode
  };

  // Handle delete book
  const deleteBook = (id) => {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
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
                <button className="cancel-button" onClick={toggleAddForm}>
                  Cancel Add
                </button>
              </div>
            ) : editBook ? (
              <EditBook
                book={editBook}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <div className="toolbar-actions">
                  <button
                    className="add-button"
                    onClick={toggleAddForm}
                  >
                    Add New Book
                  </button>
                </div>

                {/* Conditional rendering for favorites list or filtered book table */}
                {showFavoritesScreen ? (
                  <div className="favorites-section">
                    <h2>Favorite Books:</h2>
                    {favoriteBooks.length > 0 ? (
                      <FavoritesList
                        books={favoriteBooks}
                        onEditClick={handleEditClick}
                        onDeleteClick={handleDeleteFavorite}
                      />
                    ) : (
                      <p>No favorite books selected.</p>
                    )}
                  </div>
                ) : (
                  <Table
                    books={filteredBooks}
                    onFavouriteClick={handleFavouriteClick}
                    onEditClick={handleEditClick}
                    onDeleteClick={deleteBook}
                  />
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
