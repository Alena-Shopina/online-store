import React from "react";

import "../styles/footer.css";
import "../styles/general.css";
import "../styles/reset.css";

import instagramIcon from "../assets/img/instagram.png";
import tiktokIcon from "../assets/img/tik-tok.png";
import telegramIcon from "../assets/img/telegram.png";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h1 className="footer-logo">LumiAura</h1>
            <p>
              Email: <a href="mailto:info@yourshop.com">info@yourshop.com</a>
            </p>
            <p>
              Телефон: <a href="tel:+380000000000">+38 (067) 807-28-54</a>
            </p>
          </div>

          <div className="footer-center">
            <h4>Ми в соцмережах</h4>
            <div className="social-icons">
              <a href="#!">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a href="#!">
                <img src={tiktokIcon} alt="TikTok" className="social-icon" />
              </a>
              <a href="#!">
                <img
                  src={telegramIcon}
                  alt="Telegram"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-copy">
        <p>© 2025 LumiAura. Усі права захищено.</p>
      </div>
    </>
  );
};

export default Footer;
