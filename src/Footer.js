
import React from "react";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div>
        <a href="#home" className="logo footer-logo">
          {/* <span className="logo-icon"></span> */}
          <span>Haider Chemicals<span className="logo-accent">.</span></span>
        </a>
        <p>Your everyday essentials for feeling your best.</p>
      </div>

      <div className="footer-contact">
        <h3>Get in Touch</h3>
        <p>Email: hello@pureglow.example</p>
        <p>Customer Support · Product Enquiries · Orders</p>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Haider Chemicals. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
