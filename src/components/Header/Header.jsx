import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="menu-icon" onClick={handleMenuClick}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`header__menu ${menuOpen ? "menu-open" : ""}`}>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home{" "}
          </Link>
        </li>

        <li>
          <Link to="programs" spy={true} smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="programs" spy={true} smooth={true}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="packages" spy={true} smooth={true}>
            Packages
          </Link>
        </li>
        <li>
          <Link to="Testimonials" spy={true} smooth={true}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
