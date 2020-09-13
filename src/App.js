import React, { useState } from 'react';
import './App.css';

import SearchBox from './components/SearchBox'
import SearchResult from './components/SearchResult'

import ImagesContext from './context/ImagesContext'

function App() {
  const [images, setImages] = useState([])
  const contextValue = { images, setImages }

  return (
    <ImagesContext.Provider value={contextValue}>
      <div className="App">
        <ImagesContext.Consumer>
          { ({images, setImages}) => (
            <>
              <SearchBox setImages={setImages}></SearchBox>
              <SearchResult imageList={images}></SearchResult>
            </>
          )}
        </ImagesContext.Consumer>
      </div>
    </ImagesContext.Provider>
  );
}

export default App;
