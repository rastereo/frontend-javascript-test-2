import React from 'react';

function SearchForm() {
  return (
    <section className="search-form">
      <h1 className="search-form__title">Search for Books</h1>
      <form className="search-from__form">
        <div className="search-form__container">
          <input type="text" className="search-form__input" />
          <button
            type="submit"
            aria-label="search"
          />
        </div>
        <label htmlFor="categories-select">
          Categories
          <select
            name="categories"
            id="categories-select"
            className="search-form__select"
          >
            <option value="all" className="search-form__option">all</option>
            <option value="art" className="search-form__option">art</option>
            <option value="biography" className="search-form__option">biography</option>
            <option value="computers" className="search-form__option">computers</option>
            <option value="history" className="search-form__option">history</option>
            <option value="medical" className="search-form__option">medical</option>
            <option value="poetry" className="search-form__option">poetry</option>
          </select>
        </label>
        <label htmlFor="sort-select">
          Sorting by
          <select
            name="sort"
            id="sort-select"
            className="search-form__select"
          >
            <option value="relevance" className="search-form__option">relevance</option>
            <option value="newest" className="search-form__option">newest</option>
          </select>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
