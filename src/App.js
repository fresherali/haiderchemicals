
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Products from "./Products.jsx";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import OrderPage from "./OrderPage";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Hero />

      <section id="items" className="info-section">
        <p className="eyebrow">OUR COLLECTION</p>
        <h2>Everything You Need for Daily Care</h2>
        <p>
          Explore skincare, haircare, body care, and everyday
          hygiene essentials selected for your lifestyle.
        </p>
      <Link to="/products" className="section-link">Explore Our Collection</Link>
      </section>

      <section id="orders" className="info-section orders-section">
        <p className="eyebrow">SIMPLE &amp; CONVENIENT</p>
        <h2>Your Essentials, Delivered</h2>
        <p>
          Find your favorite toiletries and contact our team
          to learn more about ordering and delivery.
        </p>
<Link to="/order" className="section-link">
  Learn About Ordering
</Link>
      </section>

      <section id="about" className="info-section">
        <p className="eyebrow">ABOUT US</p>
        <h2>Care That Starts With You</h2>
        <p>
          We believe everyday personal care should be simple,
          enjoyable, and accessible. Discover products that
          help you feel fresh and confident every day.
        </p>
      </section>

      {/* Add your contact section here if you already have one */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;



