import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CatalogPage from "./pages/CatalogPage";
import ProductDetails from "./pages/ProductDetails"; // Додаємо сторінку деталей

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />{" "}
            {/* новий маршрут */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
