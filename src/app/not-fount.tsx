export default function NotFound() {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>404 - Page Not Found</h1>
        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Sorry, the page you are looking for does not exist.</p>
        <a href="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>Return to Home</a>
      </main>
    );
  }