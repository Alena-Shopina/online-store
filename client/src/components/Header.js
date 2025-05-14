import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/header.css";
import "../styles/general.css";
import "../styles/reset.css";
import cartIcon from "../assets/img/cart-icon.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Трохи часу на рендер
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header">
      <div className="container_header">
        <h1 className="logo">LumiAura</h1>

        {/* Бургер-меню */}
        <div
          className={`burger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
            <li>
              <button
                className="nav-button-link"
                onClick={() => scrollToSection("advantages")}
              >
                Переваги
              </button>
            </li>
            <li>
              <button
                className="nav-button-link"
                onClick={() => scrollToSection("footer")}
              >
                Контакти
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-icons">
          <button className="cart-btn">
            <img src={cartIcon} alt="Кошик" />
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
