import React from 'react';

function BookInfo() {
  return (
    <section className="book-info">
      <img
        src="https://cdn.theatlantic.com/thumbor/oiJLqc8cLLJ1auSGZt1QnOERWzo=/0x1:4480x5601/960x1200/media/img/2022/11/11/PUZZLER_portrait/original.jpg"
        alt="book"
        className="book-info__cover"
      />
      <div className="book-info__description">
        <p className="book-info__category">Computers / Art</p>
        <h3 className="book-info__name">Node.js Разработка серверных веб-приложений на JavaScript</h3>
        <p className="book-info__author">Дэвид Хэррон</p>
        <p className="book-info__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </section>
  );
}

export default BookInfo;
