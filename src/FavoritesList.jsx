// FavoritesList.js
import React from 'react';
import Delete from './Delete';

const FavoritesList = ({ books, onEditClick, onDeleteClick }) => {
  return (
    <div className="favorites-list">
      {books.map(book => (
        <div key={book.id} className="favorite-book">
          <h3>{book.Name}</h3> by {book.Writer} : ${book.Price}
          <div className="button-container">
            <Delete onDeleteClick={onDeleteClick} bookId={book.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
