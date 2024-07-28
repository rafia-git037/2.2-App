// FavoritesList.js
import React from 'react';
import Delete from './Delete';

const FavoritesList = ({ books, onDeleteClick }) => {
  return (
    <div className="favorites-list">
      {books.map(book => (
        <div key={book.id} className="favorite-book">
          <h3>{book.Name} by {book.Writer} : ${book.Price} </h3>
          <div className="button-container">
            <Delete onDeleteClick={onDeleteClick} bookId={book.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
