import React from 'react';

const Table = ({ books, onFavouriteClick, onEditClick, onDeleteClick }) => {
  const handleFavouriteClick = (id) => {
    const book = books.find(book => book.id === id);
    if (book) {
      const isFavourite = book.isFavourite;
      if (isFavourite) {
        console.log(`"${book.Name}" is removed from favourites`);
      } else {
        console.log(`"${book.Name}" is added to favourites`);
      }
      onFavouriteClick(id);
    }
  };

  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Writer</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} className={book.isFavourite ? 'favourite' : ''}>
            <td>{book.Name}</td>
            <td>{book.Writer}</td>
            <td>${book.Price}</td>
            <td className="button-container">
              <button onClick={() => handleFavouriteClick(book.id)}>
                {book.isFavourite ? 'Unfavourite' : 'Favourite'}
              </button>
              <button onClick={() => onEditClick(book.id)}>Edit</button>
              <button onClick={() => onDeleteClick(book.id)}>Delete this book</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
