import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const onActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0 nav-underline">
            <li className="nav-item">
              <Link
                className={
                  activeItem === "home"
                    ? "nav-link mx-3 active"
                    : "nav-link mx-3"
                }
                aria-current="page"
                to="home"
                onClick={() => onActiveItem("home")}
              >
                หน้าแรก
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className={
                  activeItem === "history" || activeItem === "rdp"
                    ? "nav-link mx-3 dropdown-toggle active"
                    : "nav-link mx-3 dropdown-toggle"
                }
                to="history"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                เกี่ยวกับ
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className={
                      activeItem === "history"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="history"
                    onClick={() => onActiveItem("history")}
                  >
                    ประวัติหน่วยงาน
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      activeItem === "rdp"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    to="rdp"
                    onClick={() => onActiveItem("rdp")}
                  >
                    โครงการอันเนื่องมาจากพระราชดำริ
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item ">
              <Link
                className={
                  activeItem === "services"
                    ? "nav-link mx-3 active"
                    : "nav-link mx-3"
                }
                to="services"
                onClick={() => onActiveItem("services")}
              >
                บริการประชาชน
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  activeItem === "events"
                    ? "nav-link mx-3 active"
                    : "nav-link mx-3"
                }
                to="events"
                onClick={() => onActiveItem("events")}
              >
                ภาพกิจกรรม
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  activeItem === "contact"
                    ? "nav-link mx-3 active"
                    : "nav-link mx-3"
                }
                to="contact"
                onClick={() => onActiveItem("contact")}
              >
                ติดต่อ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
