import React from 'react';
import './App.css';

import SearchForm from './components/SearchForm/SearchForm';
import BookCardList from './components/BookCardList/BookCardList';
import ResultCounter from './components/ResultCounter/ResultCounter';
import BookInfo from './components/BookInfo/BookInfo';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <ResultCounter numberOfBooks={123} />
      <BookCardList />
      <BookInfo />
    </div>
  );
}

export default App;
