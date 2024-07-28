import React from 'react';
import './FavoritesScreen.css';

const FavoritesScreen = ({ books, handleEditClick, handleDeleteFavorite }) => {
  return (
    <div className="favorites-section">
      <h2>Favorite Books:</h2>
      {books.length > 0 ? (
        <ul>
          {books.map(book => (
            <li key={book.id}>
             <h3>{book.Name}  by {book.Writer} : ${book.Price} </h3>
              <button onClick={() => handleDeleteFavorite(book.id)}>Remove from Favorites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite books selected.</p>
      )}
    </div>
  );
};

export default FavoritesScreen;
