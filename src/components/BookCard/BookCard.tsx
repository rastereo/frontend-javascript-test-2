import React from 'react';

function BookCard() {
  return (
    <article className="book-card">
      <img
        src="https://cdn.theatlantic.com/thumbor/oiJLqc8cLLJ1auSGZt1QnOERWzo=/0x1:4480x5601/960x1200/media/img/2022/11/11/PUZZLER_portrait/original.jpg"
        alt="book"
        className="book-card__cover"
      />
      <div className="book-card__description">
        <p className="book-card__category">Computers</p>
        <h3 className="book-card__name">Node.js Разработка серверных веб-приложений на JavaScript</h3>
        <p className="book-card__author">Дэвид Хэррон</p>
      </div>
    </article>
  );
}

export default BookCard;
