/* eslint-disable react/jsx-key */
// import { useState } from 'react'
import Cards from "./cards";
// import Game from "./game"
// import Timer from "./timer"
import cardData from "./card-data.json";

import "./App.css";

function App() {
  console.log("this is cardData", cardData);
  const duplicateCards = Array.from(cardData);
  console.log("this is duplicate", duplicateCards);
  const fullDeck = duplicateCards.concat(cardData);
  
  const shuffled = arrayToBeShuffled => {
    for (let i = arrayToBeShuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arrayToBeShuffled[i];
      arrayToBeShuffled[i] = arrayToBeShuffled[j];
      arrayToBeShuffled[j] = temp;
    }
  }
  shuffled(fullDeck)

  return (
    <div className="page-container">
      <h1>Flip the bird</h1>
      <br></br>
    <div className="card-container">
      {fullDeck.map((card) => (
        <Cards front={card.card_front} back={card.card_back} />
      ))}
    </div>
    </div>
  );
}

export default App;
