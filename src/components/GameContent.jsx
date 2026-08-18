import Card from "./card.jsx";

// Displays the game instructions, flipped-card count, and all cards.
export default function GameContent({ cards, onCardClick }) {
  return (
    <>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            img={card.img}
            bgColor={card.bgColor}
            isFlipped={card.isFLipped}
            onCardClick={() => onCardClick(card.id)}
          />
        ))}
      </div>
    </>
  );
}
