
import React, { useState } from "react";
import "./App.css";

const ADMIN_WHATSAPP = "923001234567"; // Replace with your real WhatsApp number
const COMPANY_PHONE = "+92 300 1234567"; // Replace with your real phone number
const COMPANY_EMAIL = "info@haiderchemicals.com"; // Replace with your real email

function Contact() {
  const [formData, setFormData] = useState({
    number: "",
    email: "",
    address: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const { number, email, address, message } = formData;

    if (!number.trim() || !email.trim() || !address.trim() || !message.trim()) {
      setError("Please fill in all fields before sending.");
      return;
    }

    const whatsappMessage = `
Hello Haider Chemicals!

I would like to contact you.

Phone Number: ${number}
Email: ${email}
Address: ${address}

Message:
${message}
    `.trim();

    const whatsappURL =
      `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="contact-page">
      {/* Page heading */}
      <section className="contact-hero">
        <div className="container">
          <span className="contact-eyebrow">WE'RE HERE TO HELP</span>
          <h1>Contact Us</h1>
          <p>
            Have a question about our toiletries or chemical supplies?
            Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact information and form */}
      <section className="container contact-section">
        <div className="row g-4 align-items-stretch">

          {/* LEFT: Map and company details */}
          <div className="col-lg-6">
            <div className="contact-info-card">
              <div className="contact-info-heading">
                <span className="contact-label">OUR LOCATION</span>
                <h2>Visit Haider Chemicals</h2>
                <p>
                  Contact us for your toiletries, cleaning products,
                  and commercial supply requirements.
                </p>
              </div>

              <div className="contact-map">
                <iframe
                  title="Haider Chemicals office location"
                  src="https://maps.google.com/maps?q=Circular%20Road%2C%20Akbari%20Mandi%2C%20Lahore%2C%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                className="map-link"
                href="https://maps.app.goo.gl/CSfHsAL4k1hAfetQ6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions on Google Maps ↗
              </a>

              <div className="contact-details">
                <div className="contact-detail">
                  <span className="detail-icon">📍</span>
                  <div>
                    <h3>Office Address</h3>
                    <p>
                      Circular Road, Akbari Mandi,
                      near Ali Goods, Lahore, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="detail-icon">☎</span>
                  <div>
                    <h3>Phone Number</h3>
                    <a href={`tel:${COMPANY_PHONE.replace(/[^\d+]/g, "")}`}>
                      {COMPANY_PHONE}
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="detail-icon">✉</span>
                  <div>
                    <h3>Email Address</h3>
                    <a href={`mailto:${COMPANY_EMAIL}`}>
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="col-lg-6">
            <div className="contact-form-card">
              <span className="contact-label">SEND US A MESSAGE</span>
              <h2>Let's Talk Business</h2>
              <p className="form-intro">
                Fill in the details below and continue on WhatsApp
                to send your message to our team.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="number" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="number"
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formData.number}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="form-label">
                    Your Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Enter your city or business address"
                    value={formData.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control contact-message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && (
                  <p className="contact-error" role="alert">
                    {error}
                  </p>
                )}

                <button type="submit" className="whatsapp-button">
                  <span aria-hidden="true">◉</span>
                  Send on WhatsApp
                  <span aria-hidden="true">↗</span>
                </button>

                <p className="form-note">
                  Your message will open in WhatsApp for you to review
                  and send.
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Contact;
