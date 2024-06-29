import React from 'react';
import Table from './Table';

function Wishlist({ books, onFavouriteClick }) {
  return (
    <main>
      <section className="wishlist">
        <h1>My Wishlist</h1>
        <Table books={books} onFavouriteClick={onFavouriteClick} />
      </section>
    </main>
  );
}

export default Wishlist;
