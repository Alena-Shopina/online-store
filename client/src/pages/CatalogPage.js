import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/catalog.css";
import "../styles/reset.css";
import "../styles/general.css";

import lamp1 from "../assets/img/tovar_1.webp";
import lamp2 from "../assets/img/tovar_3.webp";
import lamp3 from "../assets/img/tovar_2.jpg";
import lamp4 from "../assets/img/Lamp_1.jpg";
import lamp5 from "../assets/img/Lamp_5.avif";
import lamp6 from "../assets/img/Lamp_6.webp";

const CatalogPage = () => {
  const allProducts = [
    { id: 1, name: "RGB lamp 1", price: 1500, img: lamp1 },
    { id: 2, name: "RGB lamp 2", price: 2200, img: lamp2 },
    { id: 3, name: "RGB lamp 3", price: 2700, img: lamp3 },
    { id: 4, name: "RGB lamp 4", price: 2500, img: lamp4 },
    { id: 5, name: "RGB lamp 5", price: 2200, img: lamp5 },
    { id: 6, name: "RGB lamp 6", price: 2700, img: lamp6 },
    { id: 7, name: "RGB lamp 7", price: 2500, img: lamp3 },
    { id: 8, name: "RGB lamp 8", price: 2200, img: lamp1 },
    { id: 9, name: "RGB lamp 9", price: 2700, img: lamp5 },
    { id: 10, name: "RGB lamp 10", price: 1500, img: lamp4 },
    { id: 11, name: "RGB lamp 11", price: 2200, img: lamp6 },
    { id: 12, name: "RGB lamp 12", price: 2700, img: lamp3 },
  ];

  const [visibleProducts, setVisibleProducts] = useState(6);

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  // Додаємо/прибираємо клас для вимкнення підсвітки
  useEffect(() => {
    document.body.classList.add("no-shadow");
    return () => {
      document.body.classList.remove("no-shadow");
    };
  }, []);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="catalog-title">Наша колекція освітлення:</h2>
        <div className="product-grid">
          {allProducts.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.img}
                alt={product.name}
                className="product-img"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price} грн</p>
              <Link to={`/product/${product.id}`}>
                <button className="btn--small">Детальніше</button>
              </Link>
            </div>
          ))}
        </div>
        {visibleProducts < allProducts.length && (
          <button className="btn--load-more" onClick={showMoreProducts}>
            Подивитися ще
          </button>
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
