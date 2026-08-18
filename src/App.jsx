import { useState } from "react";
import data from "./components/data.js";
import GameContent from "./components/GameContent.jsx";
import "./styles/App.css";

// Main component that stores the game state and displays the memory game.
function App() {
  const [cards, setCards] = useState(data);
  const [highScore, setHighScore] = useState(0);

  let flippedCount = cards.filter((card) => card.isFLipped).length;

  // Flip the selected card, or end the game if it was already flipped.
  const handleCardClick = (id) => {
    if (cards.some((card) => card.id === id && card.isFLipped)){
      if(flippedCount > highScore)
      setHighScore(flippedCount);
      setCards(data);
    } else {

    setCards((prev) => {
      const updatedCards = prev.map((card) =>
        card.id === id ? { ...card, isFLipped: !card.isFLipped } : card
      );

      return shuffleCards(updatedCards);
    });
  }};  

  // Return a shuffled copy of the cards without changing the original array.
  const shuffleCards = (array) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  return (
    <>
      <section id="gameBoard" className="gameBoard">
        <div className="hero">
          <h1 className="game-title">Steven Universe Memory Game</h1>
          <h2>{`High Score: ${highScore}`}</h2>
          <h2>
              Number of Cards Flipped: {flippedCount} / {cards.length}
          </h2>
            <h2>Click on a card to flip it over. Try to find matching pairs!</h2>
            <GameContent
              cards={cards}
              onCardClick={handleCardClick}
            />
          </div>
      </section>
    </>
  );
}

export default App;
