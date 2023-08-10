import Carousel from "../carousel/Carousel";
import "./widget.css";

const Widget = ({ id, heading, slides }) => {
  return (
    <div>
      <div className="widget">
        <h5>{heading}</h5>
        <Carousel id={id} slides={slides} />
      </div>
    </div>
  );
};

export default Widget;
