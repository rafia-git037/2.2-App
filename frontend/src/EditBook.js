import React, { useState } from 'react';

const EditBook = ({ book, onSave, onCancel }) => {
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(editedBook);
  };

  return (
    <div className="edit-book-form">
      <input
        type="text"
        placeholder="Book Name"
        name="Name"
        value={editedBook.Name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Writer"
        name="Writer"
        value={editedBook.Writer}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Price"
        name="Price"
        value={editedBook.Price}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditBook;
