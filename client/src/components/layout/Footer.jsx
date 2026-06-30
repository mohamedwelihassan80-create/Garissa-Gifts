import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>

        <div style={s.col}>
          <h3 style={s.brand}>🌸 Garissa Gifts</h3>
          <p style={s.brandDesc}>Perfumes, flowers, gifts & cards — curated with love, delivered instantly across Kenya.</p>
        </div>

        <div style={s.col}>
          <h4 style={s.colTitle}>Quick Links</h4>
          <Link to='/' style={s.footLink}>Home</Link>
          <Link to='/products' style={s.footLink}>Shop</Link>
          <Link to='/orders' style={s.footLink}>My Orders</Link>
          <Link to='/register' style={s.footLink}>Create Account</Link>
        </div>

        <div style={s.col}>
          <h4 style={s.colTitle}>Categories</h4>
          <Link to='/products?category=flowers' style={s.footLink}>🌹 Flowers</Link>
          <Link to='/products?category=perfumes' style={s.footLink}>🌺 Perfumes</Link>
          <Link to='/products?category=gifts' style={s.footLink}>🎁 Gifts</Link>
          <Link to='/products?category=cards' style={s.footLink}>💌 Cards</Link>
        </div>

        <div style={s.col}>
          <h4 style={s.colTitle}>Contact</h4>
          <p style={s.footText}>📍 Garissa, Kenya</p>
          <p style={s.footText}>📞 +254 700 000 000</p>
          <p style={s.footText}>✉️ hello@garissagifts.co.ke</p>
        </div>

      </div>
      <div style={s.bottom}>
        <p style={s.bottomText}>© {new Date().getFullYear()} Garissa Gifts & Flowers Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

const s = {
  footer: { background: '#1a1a2e', color: 'white', paddingTop: '3rem' },
  inner: { maxWidth: '1100px', margin: '0 auto', padding: '0 1rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' },
  col: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  brand: { fontSize: '1.2rem', fontWeight: '800', margin: '0 0 0.5rem', color: 'white' },
  brandDesc: { fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 },
  colTitle: { fontSize: '0.85rem', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.25rem' },
  footLink: { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' },
  footText: { color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 },
  bottom: { borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.25rem 1rem', textAlign: 'center' },
  bottomText: { color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', margin: 0 },
};

export default Footer;