import React from 'react';
import './App.css';

import SearchForm from './components/SearchForm/SearchForm';
import BookCardList from './components/BookCardList/BookCardList';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <BookCardList />
    </div>
  );
}

export default App;
