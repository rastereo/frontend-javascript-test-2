import React from 'react';
import './App.css';

import SearchForm from './components/SearchForm/SearchForm';
import BookCardList from './components/BookCardList/BookCardList';
import ResultCounter from './components/ResultCounter/ResultCounter';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <ResultCounter numberOfBooks={123} />
      <BookCardList />
    </div>
  );
}

export default App;
