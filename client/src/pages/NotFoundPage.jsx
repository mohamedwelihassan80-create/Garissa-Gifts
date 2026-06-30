import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
    <h1 style={{ fontSize: '5rem', color: '#2d6a4f', margin: 0 }}>404</h1>
    <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
    <p style={{ color: '#666', marginBottom: '2rem' }}>
      The page you're looking for doesn't exist.
    </p>
    <Link to='/' style={{
      background: '#2d6a4f',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      textDecoration: 'none'
    }}>
      Go Home
    </Link>
  </div>
);

export default NotFoundPage;