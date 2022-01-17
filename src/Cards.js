import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Cards = ({deckBaseUrl, deckNewEnd, deckDrawEnd}) => {
  const [numDecks, setNumDecks] = useState(1);
  const [numCards, setNumCards] = useState(1);
  const [deckId, setDeckId] = useState(null);
  const [cardsRemaining, setCardsRemaining] = useState(0);
  const [dealtCards, setDealtCards] = useState([]);

  const shuffleNewDeck = async () => {
    const res = await axios.get(`${deckBaseUrl}${deckNewEnd}${numDecks}`);
    setDeckId(res.data.deck_id);
    setCardsRemaining(res.data.remaining);
  };

  const dealCard = async () => {
    const res = await axios.get(`${deckBaseUrl}${deckId}${deckDrawEnd}${numCards}`);
    setCardsRemaining(res.data.remaining);
    setDealtCards(dealtCards => [...dealtCards, ...res.data.cards]);
  };

  useEffect(() => {
    shuffleNewDeck();
  }, []);

  const fewerCards = () => {
    if (numCards > 1) {
      setNumCards(numCards -1)
    };
  };

  const moreCards = () => {
    if (numCards < cardsRemaining) {
      setNumCards(numCards +1)
    };
  };

  return (
    <div className="Cards">
      <h2>Let's throw some cards around, eh?</h2>
      {(cardsRemaining > 0) 
        ? <>
            <button 
              onClick={dealCard} 
              className="big-btn"
              data-testid="deal"
            >
              deal {numCards} card{(numCards > 1) ? 's' : ''}
            </button> 
            <br />
            <button 
              onClick={fewerCards}
              data-testid="fewer-cards"
            >
              fewer cards
            </button>
            <button 
              onClick={moreCards}
              data-testid="more-cards"
            >
              more cards
            </button>
          </>
        : <>
            <button 
              onClick={shuffleNewDeck} className="big-btn"
              data-testid="shuffle"
            >
              shuffle {numDecks} deck{(numDecks > 1) ? 's' : ''}
            </button> 
            <br />
            <button 
              onClick={() => {setNumDecks(numDecks -1)}}
              data-testid="fewer-decks"
            >
              fewer decks
            </button>
            <button 
              onClick={() => {setNumDecks(numDecks +1)}}
              data-testid="more-decks"
            >
              more decks
            </button>
          </>
      }
      <div className="table">
        {dealtCards.map((card, i) => (
            <Card 
              img={card.image}
              code={card.code}
              offset={i*20}
              key={i} 
            />
        ))}
      </div>
    </div>
  );
};

export default Cards;