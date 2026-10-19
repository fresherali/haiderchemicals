

import React, { useState } from "react";
import productsData from "./productsData";
import "./App.css";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Toiletries",
  "Chemicals",
  "Empty Cans",
  "Perfume Essence",
];

function Products() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Navigate to the order page with the selected product
  const orderProduct = (product) => {
    navigate("/order", {
      state: { product },
    });
  };

  return (
    <section className="products-page">
      <div className="products-heading">
        <span className="products-subtitle">HAIDER CHEMICALS</span>

        <h1>Our Products</h1>

        <p>
          Quality toiletries, cleaning products, raw materials,
          and fragrance essentials.
        </p>
      </div>

      <div className="product-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-search">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Search products by name"
        />

        {searchTerm && (
          <button
            className="clear-search"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <div className="products-count">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image-wrap">
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />

              <span className="product-category">
                {product.category}
              </span>
            </div>

            <div className="product-info">
              <h2>{product.title}</h2>

              <p className="product-description">
                {product.description}
              </p>

              <div className="product-card-footer">
                <div className="product-price">
                  <span>Price</span>

                  <strong>
                    Rs. {product.price.toLocaleString("en-PK")}
                  </strong>
                </div>

                <button
                  className="order-btn"
                  onClick={() => orderProduct(product)}
                >
                  Order Now <span>↗</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <h2>No products found</h2>

          <p>
            Try another product name or select a different category.
          </p>

          <button
            className="filter-btn active"
            onClick={() => {
              setActiveCategory("All");
              setSearchTerm("");
            }}
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
