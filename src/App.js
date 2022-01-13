import React from 'react';
import './App.css';
import {deckBaseUrl, deckNewEnd, deckDrawEnd} from './helpers';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      <Cards 
        deckBaseUrl={deckBaseUrl}
        deckNewEnd={deckNewEnd}
        deckDrawEnd={deckDrawEnd}
      />
    </div>
  );
}

export default App;
