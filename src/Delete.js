// Delete.js
import React from 'react';

const Delete = ({ onDeleteClick, bookId }) => {
  return (
    <button className="delete-button" onClick={() => onDeleteClick(bookId)}>Delete</button>
  );
}

export default Delete;
