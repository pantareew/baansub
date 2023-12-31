import "./buttoncard.css";
const ButtonCard = ({ cards }) => {
  return (
    <div className="buttonCard row">
      {cards.map((card, index) => (
        <div key={index} className="card-item col-lg-4">
          <a href={card.link} className="card btn">
            <img
              src={card.image}
              className="card-img-top cardImg"
              alt={card.title}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ButtonCard;
