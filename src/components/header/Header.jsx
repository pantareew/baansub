import "./header.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header>
      <div className="site_heading">
        <div className="site_logo">
          <a href="home">
            <img src={logo} alt="กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช" />
          </a>
        </div>
        <div className="site_title">
          <h1 className="title">
            โครงการพัฒนาป่าไม้ตามแนวพระราชดำริบ้านซับตะเคียน
          </h1>
          <h2 className="subtitle">
            Baan Sub Takhian Royal Development Project
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
