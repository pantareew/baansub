import mnre from "../../assets/mnre.png";
import rdpb from "../../assets/rdpb.png";
import dnp from "../../assets/dnp.png";
import phs from "../../assets/phs.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="pre-footer">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-5 col-md-10 col-sm-12">
              <div className="logo-link">
                <a href="https://www.mnre.go.th/" target="_blank">
                  <img
                    src={mnre}
                    title="กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"
                  />
                </a>
                <a href="https://www.rdpb.go.th/" target="_blank">
                  <img src={rdpb} title="สำนักงาน กปร." />
                </a>
                <a href="http://portal.dnp.go.th/" target="_blank">
                  <img
                    src={dnp}
                    title="กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช"
                  />
                </a>
                <a href="http://portal.dnp.go.th/p/Phitsanulok" target="_blank">
                  <img src={phs} title="สำนักบริหารพื้นที่อนุรักษ์ที่ 11" />
                </a>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-10">
              <div className="desc">
                <h4>โครงการพัฒนาป่าไม้ตามแนวพระราชดำริบ้านซับตะเคียน</h4>
                99 หมู่ 9 ตำบลสระแก้ว อำเภอบึงสามพัน จังหวัดเพชรบูรณ์ 67160
                <br />
                โทรศัพท์<b> :</b> &nbsp;&nbsp;0-5500-9937
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
