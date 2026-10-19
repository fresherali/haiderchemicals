
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOrderClick = () => {
    setMenuOpen(false);
    navigate("/order");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="anavbar">
      <a href="/" className="logo" onClick={closeMenu}>
        <img
          src="/logo.jpg"
          alt="Haider Chemicals Logo"
          className="logo-icon"
        />

        <span className="logoaccent">
          Haider <span className="logo-accent">Chemicals.</span>
        </span>
      </a>

      <nav className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/" className="nav-1link" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/products" className="nav-2link" onClick={closeMenu}>
          Products
        </Link>

        <Link to="/order" className="nav-2link" onClick={closeMenu}>
          Orders
        </Link>

        <Link to="/about" className="nav-2link" onClick={closeMenu}>
          About Us
        </Link>

        <Link to="/contact" className="nav-2link" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      <button
        type="button"
        className="nav-cta"
        onClick={handleOrderClick}
      >
        Order Now
      </button>

      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default Navbar;


