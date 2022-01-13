import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const Cards = ({deckBaseUrl, deckNewEnd, deckDrawEnd}) => {
  const [numDecks, setNumDecks] = useState(1);
  const [numCards, setNumCards] = useState(1);
  const [deckUrl, setDeckUrl] = useState(`${deckBaseUrl}${deckNewEnd}${numDecks}`);
  const [deckId, setDeckId] = useState(null);
  const [cardUrl, setCardUrl] = useState(null);
  const [cardsRemaining, setCardsRemaining] = useState(0);

  const shuffleNewDeck = async () => {
    const res = await axios.get(deckUrl);
    setDeckId(res.data.deck_id);
    setCardsRemaining(res.data.remaining);
    setCardUrl(`${deckBaseUrl}${deckId}${deckDrawEnd}${numCards}`);
  };

  const dealCard = async () => {
    const res = await axios.get(cardUrl);
    setCardsRemaining(res.data.remaining);

  }

  useEffect(() => {
    shuffleNewDeck();
  }, []);

  return (
    <div className="Cards">
      <h2>Let's throw some cards around, eh?</h2>
      {(cardsRemaining > 0) 
        ? <>
            <button onClick={dealCard} className="big-btn">deal {numCards} card{(numCards > 1) ? 's' : ''}</button> 
            <br />
            <button onClick={() => {setNumCards(numCards +1)}}>more cards</button>
            <button onClick={() => {setNumCards(numCards -1)}}>fewer cards</button>
          </>
        : <>
            <button onClick={shuffleNewDeck} className="big-btn">shuffle {numDecks} deck{(numDecks > 1) ? 's' : ''}</button> 
            <br />
            <button onClick={() => {setNumDecks(numDecks +1)}}>more decks</button>
            <button onClick={() => {setNumDecks(numDecks -1)}}>fewer decks</button>
          </>
      }
      
    </div>
  );
};

export default Cards;