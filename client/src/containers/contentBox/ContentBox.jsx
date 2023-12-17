import Widget from "../../components/widget/Widget";

import "./contentBox.css";
import { useEffect, useState } from "react";
const ContentBox = () => {
  const [tip, setTip] = useState(null);
  const [event, setEvent] = useState(null);
  const [vdo, setVdo] = useState(null);
  useEffect(() => {
    const fetchSlideshow = async () => {
      const tipSlides = await fetch("/tipSlides");
      const cSlides = await fetch("/cSlides");
      const vdoContent = await fetch("/vdo");
      const tipJson = await tipSlides.json();
      const cJson = await cSlides.json();
      const vJson = await vdoContent.json();
      if (tipSlides.ok) {
        const result = tipJson.images.map((item) => ({
          content: item.imageUrl,
          title: item.imageDesc,
        }));
        setTip(result);
      }
      if (cSlides.ok) {
        const result = cJson.images.map((item) => ({
          content: item.imageUrl,
          title: item.imageDesc,
        }));
        setEvent(result);
      }
      if (vdoContent.ok) {
        const result = [{ content: vJson.vdoUrl, isVdo: true }];
        setVdo(result);
      }
    };
    fetchSlideshow();
  }, []);

  return (
    <div className="contentBox">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-10">
            <div className="vdo">
              {vdo && (
                <Widget id="vdoCarousel" heading="สื่อวิดีทัศน์" slides={vdo} />
              )}
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-5">
            <div className="calendar">
              {event && (
                <Widget
                  id="calendarCarousel"
                  heading="ปฏิทินกิจกรรม"
                  slides={event}
                />
              )}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tips">
              {tip && (
                <Widget id="tipsCarousel" heading="เกร็ดความรู้" slides={tip} />
              )}
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
