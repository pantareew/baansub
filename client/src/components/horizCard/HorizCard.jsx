import "./horizcard.css";
const HorizCard = ({ cards }) => {
  return (
    <div className="horizcard">
      <div className="card mb-3">
        {cards.map((card, index) => (
          <div key={index} className="row g-0 horizcard-item">
            <div className="col-md-4">
              <img src={card.image} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{card.date}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizCard;
