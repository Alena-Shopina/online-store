import React from "react";
import "../styles/home.css"; // Підключаємо стилі
import "../styles/general.css"; // Підключаємо стилі
import "../styles/reset.css"; // Підключаємо стилі

import touchPhoto from "../assets/img/toch.jpg";
import appPhoto from "../assets/img/apps.jpg";
import syncPhoto from "../assets/img/syns.jpg";
import designPhoto from "../assets/img/design.jpg";
import tovar1 from "../assets/img/tovar_1.png";
import tovar2 from "../assets/img/tovar_2.webp";
import tovar3 from "../assets/img/tovar_3.webp";

const Home = () => {
  return (
    <main id="main" className="main">
      {/* Welcome Section */}
      <section className="welcome">
        <div className="container">
          <div className="welcome__text">
            <h1 className="welcome__title">Світло, що змінює простір</h1>
            <p className="welcome__subtitle">
              Розумні LED-світильники для вашого затишку, стилю <br />
              та атмосфери.
            </p>
            <a href="#products" className="btn">
              Популярні
            </a>
          </div>
        </div>
      </section>

      {/* Обгортка для градієнтного фону */}
      <div className="about-advantages">
        {/* About Us Section */}
        <section id="advantages" className="about-us">
          <h2 className="about-us__title">
            Хто <span>ми</span> такі?
          </h2>
          <div className="about-us__content">
            <p className="about-us__text">
              LumiAura — це команда професіоналів, які створюють освітлення
              нового покоління. Ми поєднуємо стиль, технології та інновації, щоб
              змінювати ваш простір.
            </p>
            <p className="about-us__text">
              Наші лампи — це не просто джерело світла, а інструмент для
              створення унікальної атмосфери. Ми не слідуємо трендам — ми їх
              задаємо.
            </p>
            <p className="about-us__team">
              Долучайтеся до LumiAura. Разом робимо світ яскравішим!
            </p>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="advantages">
          <div className="container">
            <h2 className="advantages__title">
              Наші <span>Переваги</span>
            </h2>
            <div className="advantages__list">
              <div className="advantage">
                <img src={touchPhoto} alt="Сенсорне керування" />
                <h3>Сенсорне керування</h3>
                <p>Лампи оснащені зручним сенсорним керуванням.</p>
              </div>
              <div className="advantage">
                <img src={appPhoto} alt="Керування через додаток" />
                <h3>Керування через додаток</h3>
                <p>Змінюй яскравість, кольори та ефекти прямо зі смартфона.</p>
              </div>
              <div className="advantage">
                <img src={syncPhoto} alt="Синхронізація" />
                <h3>Синхронізація ламп</h3>
                <p>Кілька ламп можуть працювати в унісон.</p>
              </div>
              <div className="advantage">
                <img src={designPhoto} alt="Стильний дизайн" />
                <h3>Стильний мінімалізм</h3>
                <p>Лаконічний дизайн впишеться в будь-який інтер'єр.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2 className="products__title">Обери свою розумну лампу</h2>
          <div className="products__scroll-wrapper">
            <div className="products__grid">
              <div className="product-card">
                <img src={tovar1} alt="Настільна LED лампа Crystal Rose" />
                <h3 className="product-card__title">
                  Настільна LED лампа Crystal Rose
                </h3>
                <p className="product-card__price">999 грн</p>
                <a href="product1.html" className="btn btn--small">
                  Додати в кошик
                </a>
              </div>
              <div className="product-card">
                <img src={tovar2} alt="Світильник Безкінечні тюльпани" />
                <h3 className="product-card__title">
                  Світильник Безкінечні тюльпани
                </h3>
                <p className="product-card__price">1299 грн</p>
                <a href="product2.html" className="btn btn--small">
                  Додати в кошик
                </a>
              </div>
              <div className="product-card">
                <img src={tovar3} alt="Світильник ночник 3-D ведмедик" />
                <h3 className="product-card__title">
                  Світильник ночник 3-D ведмедик
                </h3>
                <p className="product-card__price">899 грн</p>
                <a href="product3.html" className="btn btn--small">
                  Додати в кошик
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
