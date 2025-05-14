import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "../styles/reset.css";
import "../styles/general.css";
import "../styles/products.css";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState("Чорний");
  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (tabName) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  if (!product) {
    return <h2 className="not-found">Товар не знайдено</h2>;
  }

  return (
    <div className="product-details-container">
      <div className="left-column">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="right-column">
        <h1 className="product-title">{product.title}</h1>
        <p className="price">{product.price} грн</p>
        <div className="short-description">{product.description}</div>
        <button className="buy-button">Купити</button>
        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${
                openTab === "overview" ? "active" : ""
              }`}
              onClick={() => toggleTab("overview")}
            >
              Опис лампи
            </button>
            {openTab === "overview" && (
              <div className="accordion-body">{product.features.overview}</div>
            )}
          </div>

          <div className="accordion-item">
            <button
              className={`accordion-header ${
                openTab === "specs" ? "active" : ""
              }`}
              onClick={() => toggleTab("specs")}
            >
              Технічні характеристики
            </button>
            {openTab === "specs" && (
              <div className="accordion-body">
                <ul>
                  {Object.entries(product.features.specifications).map(
                    ([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button
              className={`accordion-header ${
                openTab === "package" ? "active" : ""
              }`}
              onClick={() => toggleTab("package")}
            >
              Що входить в комплект
            </button>
            {openTab === "package" && (
              <div className="accordion-body">
                <ul>
                  {product.features.packageContents.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
