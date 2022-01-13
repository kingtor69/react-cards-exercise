import './App.css';
import {deckBaseUrl, deckNewEnd, deckDrawEnd} from './helpers';

function App() {
  return (
    <div className="App">
      <Cards 
        deckBaseUrl={deckBaseUrl}
        deckBaseUrl={deckBaseUrl}
        deckDrawEnd={deckDrawEnd}
      />
    </div>
  );
}

export default App;
