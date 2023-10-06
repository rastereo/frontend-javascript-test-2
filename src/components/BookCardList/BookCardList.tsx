import React from 'react';
import BookCard from '../BookCard/BookCard';

function BookCardList() {
  return (
    <section className="book-card-list">
      <ul className="book-card-list__list">
        <li className="book-card-list__book">
          <BookCard />
        </li>
        <li className="book-card-list__book">
          <BookCard />
        </li>
        <li className="book-card-list__book">
          <BookCard />
        </li>
        <li className="book-card-list__book">
          <BookCard />
        </li>
        <li className="book-card-list__book">
          <BookCard />
        </li>
        <li className="book-card-list__book">
          <BookCard />
        </li>
        <li className="book-card-list__book">
          <BookCard />
        </li>
      </ul>
    </section>
  );
}

export default BookCardList;
