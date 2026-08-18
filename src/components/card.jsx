// Displays one card and sends its click event back to the parent component.
export default function Card({ img, name, bgColor, onCardClick, id }) {
  return (
    <div
      className="card"
      onClick={onCardClick}
      id={id}
    >
      <div className={`card-text`}>
        <h2>{name}</h2>
      </div>
      <div className="card-image-wrap" style={{ backgroundColor: bgColor }}>
        <img src={img} alt="Card Image" className="card-image" />
      </div>
   
    </div>
  );
}
