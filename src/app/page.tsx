export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f7f7f7', color: '#333', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#0d47a1', color: 'white', padding: '3rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Shubha Notary Services</h1>
        <p style={{ fontSize: '1.25rem' }}>Reliable • Certified • Convenient</p>
        <a href="#contact" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 2rem', backgroundColor: '#fbbc04', color: '#000', fontWeight: 'bold', textDecoration: 'none', borderRadius: '8px' }}>
          Book an Appointment
        </a>
      </header>

      <section style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Services</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          {['Document Notarization', 'Affidavits','Letter of Consents','i9 Verification Forms','Parental Permission Forms', 'Mobile Notary Visits', 'Acknowledgements','Power of Attorney'].map((service) => (
            <div key={service} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '260px' }}>
              <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: 'white', padding: '3rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Choose Us?</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          At Shubha Notary Services, we prioritize professionalism, security, and convenience. Whether you&apos;re at home or at the office, our mobile and virtual notary options are designed to meet your needs wherever you are.
        </p>
      </section>

      <footer id="contact" style={{ backgroundColor: '#0d47a1', color: 'white', padding: '2rem 1rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact Us</h3>
        <p>Email: <a href="mailto:shubhanotary@gmail.com" style={{ color: '#fbbc04' }}>shubhanotaryservices@gmail.com</a></p>
        <p>Phone: (689) 837-5189</p>
      </footer>
    </main>
  );
}