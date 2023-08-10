import Widget from "../../components/widget/Widget";
import Payom from "../../assets/tip_payom.png";
import Principle from "../../assets/tip_principle.png";
import Wood from "../../assets/tip_wood.jpg";
import Dam from "../../assets/checkdam.mp4";
import Treeday from "../../assets/treeday.png";
import Ozoneday from "../../assets/ozoneday.png";
import "./contentBox.css";
const ContentBox = () => {
  const tipsContent = [
    { content: Wood, title: "ไม้มงคล 9 ชนิด" },
    { content: Payom, title: "ไม้พะยอม" },
    { content: Principle, title: "หลักเศรษฐกิจพอเพียง" },
  ];
  const cContent = [
    { content: Treeday, title: "วันรักต้นไม้ประจำปี" },
    { content: Ozoneday, title: "วันโอโซนโลก" },
  ];
  const vdoContent = [{ content: Dam, isVdo: true }];
  return (
    <div className="contentBox">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-10">
            <div className="vdo">
              <Widget
                id="vdoCarousel"
                heading="สื่อวิดีทัศน์"
                slides={vdoContent}
              />
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
              <Widget
                id="calendarCarousel"
                heading="ปฏิทินกิจกรรม"
                slides={cContent}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tips">
              <Widget
                id="tipsCarousel"
                heading="เกร็ดความรู้"
                slides={tipsContent}
              />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
