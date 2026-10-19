
import React from "react";
import "./App.css";

const services = [
  {
    icon: "🧴",
    title: "Toiletries Supply",
    description:
      "Supply of hand wash, soaps, shampoos, detergents and other everyday hygiene products.",
  },
  {
    icon: "🧪",
    title: "Chemical Products",
    description:
      "Cleaning chemicals and related products for commercial and institutional requirements.",
  },
  {
    icon: "🏢",
    title: "Contract Supply",
    description:
      "Toiletries and cleaning supplies for hospitals, corporate offices and commercial buildings.",
  },
  {
    icon: "🚚",
    title: "Supply & Delivery",
    description:
      "Product supply arrangements according to customer and contract requirements.",
  },
];

const projectTypes = [
  "Hospitals and healthcare facilities",
  "Corporate offices",
  "Commercial buildings",
  "Educational institutions",
  "Hotels and other institutions",
];

function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <p className="about-eyebrow">HAIDER CHEMICALS</p>
          <h1>About Us</h1>
          <p>
            Your trusted partner in toiletries and chemical supplies
            since 2014.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="container about-section">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <p className="section-label">OUR STORY</p>
            <h2>A Commitment to Quality Since 2014</h2>
            <p>
              Haider Chemicals is a toiletries and chemical supply
              business established in 2014. We serve customers looking
              for products that support cleanliness, hygiene and
              everyday maintenance.
            </p>
            <p>
              Our business also focuses on contract-based supply for
              commercial buildings and institutions, including
              hospitals and corporate offices. We aim to build lasting
              business relationships through dependable service and
              attention to customer requirements.
            </p>

            <div className="history-badge">
              <span className="history-number">2014</span>
              <span>Established with a commitment to quality</span>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-feature-card">
              <span className="feature-icon">🌿</span>
              <h3>Cleanliness. Quality. Trust.</h3>
              <p>
                Supplying toiletries and cleaning products for
                businesses, institutions and everyday needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Introduction */}
      <section className="owner-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-4">
              <div className="owner-visual">
                <span>HC</span>
                <p>Haider Chemicals</p>
              </div>
            </div>

            <div className="col-lg-8">
              <p className="section-label">MEET OUR OWNER</p>
              <h2>Chaudhry Imran Jahangir</h2>
              <p>
                Chaudhry Imran Jahangir is the owner of Haider
                Chemicals. Under his leadership, the business focuses
                on toiletries and chemical supplies, including
                contract supply for commercial buildings and
                institutions.
              </p>
              <p>
                His association with the business reflects its
                commitment to serving customers and meeting their
                supply requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container about-section">
        <div className="text-center section-heading">
          <p className="section-label">OUR PROJECTS</p>
          <h2>Commercial & Institutional Supply</h2>
          <p>
            We cater to contract-based toiletries and cleaning supply
            requirements for different types of facilities.
          </p>
        </div>

        <div className="row g-3">
          {projectTypes.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={project}>
              <div className="project-card">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{project}</h3>
                <p>
                  Toiletries and cleaning product supply according
                  to the facility's requirements.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <div className="text-center section-heading">
            <p className="section-label">WHAT WE DO</p>
            <h2>Our Services</h2>
            <p>
              Supply solutions for hygiene, cleaning and commercial
              maintenance needs.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-sm-6 col-lg-3" key={service.title}>
                <div className="service-card">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="container about-section">
        <div className="text-center section-heading">
          <p className="section-label">FIND US</p>
          <h2>Our Office & Factory Locations</h2>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="location-card">
              <span className="location-icon">📍</span>
              <div>
                <h3>Office Location</h3>
                <p>
                  Circular Road, near Akbari Mandi,
                  Ali Goods.
                </p>
                <p className="location-note">
                  Contact us to confirm the exact address before visiting.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="location-card">
              <span className="location-icon">🏭</span>
              <div>
                <h3>Factory Location</h3>
                <p>Sharaqpur (Sharqpur).</p>
                <p className="location-note">
                  Please confirm the complete factory address before visiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container text-center">
          <h2>Looking for a Reliable Supply Partner?</h2>
          <p>
            Get in touch with Haider Chemicals to discuss your
            toiletries and commercial supply requirements.
          </p>
          <a href="/#contact" className="about-cta-button">
            Contact Us →
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
