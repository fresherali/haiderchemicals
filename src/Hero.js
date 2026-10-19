
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">
          <span className="tag-line"></span>
          YOUR DAILY Home-Care Products
        </p>

        <h1>
          Clean Life,
          <br />
          <span>Freshness in</span>
          <br />
          Every Moment.
        </h1>

        <p className="hero-description">
          Discover reliable cleaning and hygiene essentials for your everyday needs,
          From household cleaning solutions,
        we help you keep every space fresh and clean..
        </p>

        <div className="hero-buttons">
        <Link to="/products" className="primary-btn">
         Explore Products <span>→</span>
           </Link>

<Link to="/about" className="secondary-btn">
  Discover Our Story
</Link>
        </div>

        <div className="hero-trust">
          <span className="trust-icon"></span>
          <p>
            Your everyday essentials, <strong>all in one place.</strong>
          </p>
        </div>
      </div>

      {/* <div className="hero-bottom">
        <span>SKINCARE · HAIRCARE · BODYCARE</span>
        <a href="#items">SCROLL TO DISCOVER ↓</a>
      </div> */}
    </section>
  );
}

export default Hero;
