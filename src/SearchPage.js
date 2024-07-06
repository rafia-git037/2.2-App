import React from 'react';
import Table from './Table';
import AddBook from './AddBook';
import EditBook from './EditBook';
import FavoritesList from './FavoritesList';

// Import images
import searchBgImage from './images/search-page-bg.jpg';

const SearchPage = ({
  books,
  query,
  setQuery,
  showAddForm,
  toggleAddForm,
  addBook,
  editBook,
  saveEdit,
  cancelEdit,
  filteredBooks,
  favoriteBooks,
  showFavoritesScreen,
  toggleFavoritesScreen,
  handleFavouriteClick,
  handleDeleteFavorite,
  handleEditClick,
  deleteBook,
  handleBackClick
}) => {
  return (
    <div className="search-page" style={{ backgroundImage: `url(${searchBgImage})` }}>
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
          className={`favourite-button ${favoriteBooks.length > 0 ? 'active' : ''}`}
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

      {showAddForm ? (
        <AddBook
          addBook={addBook}
          toggleAddForm={toggleAddForm}
        />
      ) : editBook ? (
        <EditBook
          book={editBook}
          onSave={saveEdit}
          onCancel={cancelEdit}
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
  );
};

export default SearchPage;