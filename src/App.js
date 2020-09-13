import React from 'react';
import './App.css';

import SearchBox from './components/SearchBox'
import SearchResult from './components/SearchResult'

function App() {
  return (
    <div className="App">
      <SearchBox></SearchBox>
      <SearchResult></SearchResult>
    </div>
  );
}

export default App;
