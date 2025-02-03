import Carousel from "../../components/carousel/Carousel";

import { useState, useEffect } from "react";

import "./slideshow.css";
const Slideshow = () => {
  //handle data from database
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchSlideshow = async () => {
      const res = await fetch("/mainSlides");
      const json = await res.json();
      if (res.ok) {
        const result = json.images.map((item) => ({
          content: item.imageUrl,
          title: item.imageDesc,
        }));
        setData(result);
      }
    };
    fetchSlideshow();
  }, []);

  return (
    <div className="slideshow">
      {data && <Carousel id={"slideshowCarousel"} slides={data} />}
    </div>
  );
};

export default Slideshow;
