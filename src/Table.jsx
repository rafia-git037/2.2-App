import React from 'react';

const Table = ({ books, onFavouriteClick }) => {
  const handleFavouriteClick = (id, isFavourite) => {
    const book = books.find(book => book.id === id);
    if (book) {
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td>{book.Name}</td>
            <td>{book.Writer}</td>
            <td>${book.Price}</td>
            <td>
              <button
                className="favourite-btn"
                onClick={() => handleFavouriteClick(book.id, book.isFavourite)}
              >
                {book.isFavourite ? 'Unfavourite' : 'Favourite'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
