import "./carousel.css";
import { useEffect } from "react";
const bootstrap = require("bootstrap");

const Carousel = ({ id, slides }) => {
  useEffect(() => {
    const carousel = new bootstrap.Carousel(document.getElementById(id), {
      pause: false,
      ride: "carousel",
      interval: 4000,
    });
  });
  return (
    <>
      <div id={id} className="carousel slide">
        <div className="carousel-indicators">
          {slides.map((_slide, index) => (
            <button
              type="button"
              key={index}
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
            >
              {slide.isVdo ? (
                <video autoPlay loop muted className="d-block w-100" controls>
                  <source src={slide.content} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slide.content}
                  className="d-block w-100"
                  title={slide.title}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
