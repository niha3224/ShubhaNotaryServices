export default function Home() {
  return (
    <main className="main">
      <header className="header">
        <h1 className="header-title">Shubha Notary Services</h1>
        <p className="header-subtitle">Reliable • Certified • Convenient</p>
        <a href="#contact" className="cta-button">
          Book an Appointment
        </a>
      </header>

      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {['Document Notarization', 'Real Estate Closings', 'Mobile Notary Visits', 'Power of Attorney'].map((service) => (
            <div key={service} className="service-card">
              <p className="service-title">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="why-text">
          At Shubha Notary Services, we prioritize professionalism, security, and convenience. Whether you're at home or at the office, our mobile and virtual notary options are designed to meet your needs wherever you are.
        </p>
      </section>

      <footer id="contact" className="footer">
        <h3 className="footer-title">Contact Us</h3>
        <p>Email: <a href="mailto:shubhanotary@gmail.com" className="email-link">shubhanotary@gmail.com</a></p>
        <p>Phone: (512) 920-0618</p>
      </footer>
    </main>
  );
}
