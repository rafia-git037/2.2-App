import React, { useState } from 'react';

const AddBook = ({ addBook, toggleAddForm }) => {
  const [newBook, setNewBook] = useState({
    Name: "",
    Writer: "",
    Price: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleAddBook = () => {
    if (newBook.Name && newBook.Writer && newBook.Price) {
      const newBookObj = {
        id: Date.now(),
        Name: newBook.Name,
        Writer: newBook.Writer,
        Price: parseFloat(newBook.Price).toFixed(2),
        isFavourite: false
      };
      addBook(newBookObj);
      setNewBook({
        Name: "",
        Writer: "",
        Price: ""
      });
      toggleAddForm();
    } else {
      alert("Please enter all fields to add a new book.");
    }
  };

  return (
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
  );
};

export default AddBook;
