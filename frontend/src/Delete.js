// Delete.js
import React, { useState } from 'react';

const Delete = ({ onDeleteClick, bookId }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    onDeleteClick(bookId);
    setShowConfirmation(false); // Close confirmation after deletion
  };

  return (
    <div className="delete-container">
      {showConfirmation ? (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this book?</p>
          <button className="confirm-delete" onClick={handleDelete}>Confirm Delete</button>
          <button className="cancel-delete" onClick={() => setShowConfirmation(false)}>Cancel</button>
        </div>
      ) : (
        <button className="delete-button" onClick={() => setShowConfirmation(true)}>Delete</button>
      )}
    </div>
  );
}

export default Delete;
