import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api/axios';
import { useState } from 'react';


const CartPage = () => {
  const { cartItems, removeFromCart, updateQty, clearCart, cartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const orderItems = cartItems.map((item) => ({
        product: item._id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        image: item.image,
        file: item.file,
        fileName: item.fileName
      }));

      const { data } = await API.post('/api/orders', {
        orderItems,
        totalPrice: cartTotal
      });

      clearCart();
      navigate(`/orders/${data._id}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.empty}>
        <h2>Your cart is empty 🛒</h2>
        <p>Add some products to get started!</p>
        <Link to='/products' style={styles.shopBtn}>
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cart</h1>

      {error && <div style={styles.error}>{error}</div>}

      <div style={styles.layout}>
        <div style={styles.items}>
          {cartItems.map((item) => (
            <div key={item._id} style={styles.item}>
              <div style={styles.imageBox}>
                {item.image ? (
                  <img
                    src={`http://localhost:5000/${item.image}`}
                    alt={item.name}
                    style={styles.image}
                  />
                ) : (
                  <span style={styles.emoji}>🎁</span>
                )}
              </div>

              <div style={styles.info}>
                <h3 style={styles.name}>{item.name}</h3>
                <p style={styles.price}>KSh {item.price}</p>
              </div>

              <div style={styles.qtyBox}>
                <button style={styles.qtyBtn} onClick={() => updateQty(item._id, item.qty - 1)}>−</button>
                <span style={styles.qty}>{item.qty}</span>
                <button style={styles.qtyBtn} onClick={() => updateQty(item._id, item.qty + 1)}>+</button>
              </div>

              <div style={styles.subtotal}>
                KSh {(item.price * item.qty).toFixed(2)}
              </div>

              <button style={styles.remove} onClick={() => removeFromCart(item._id)}>✕</button>
            </div>
          ))}
        </div>

        <div style={styles.summary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>

          <div style={styles.summaryRow}>
            <span>Subtotal</span>
            <span>KSh {cartTotal.toFixed(2)}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Delivery</span>
            <span style={{ color: '#2d6a4f' }}>Free</span>
          </div>

          <div style={styles.divider} />

          <div style={{ ...styles.summaryRow, fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>Total</span>
            <span>KSh {cartTotal.toFixed(2)}</span>
          </div>

          <button
            style={{ ...styles.checkoutBtn, opacity: loading ? 0.7 : 1 }}
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>

          <Link to='/products' style={styles.continueBtn}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' },
  title: { marginBottom: '2rem', color: '#2d6a4f' },
  layout: { display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem', alignItems: 'start' },
  items: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  item: { display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  imageBox: { width: '70px', height: '70px', background: '#f0f0f0', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  emoji: { fontSize: '2rem' },
  info: { flex: 1 },
  name: { fontSize: '0.95rem', marginBottom: '0.25rem' },
  price: { color: '#2d6a4f', fontWeight: '600' },
  qtyBox: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
  qtyBtn: { width: '28px', height: '28px', border: '1px solid #ddd', background: 'white', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  qty: { fontSize: '0.95rem', minWidth: '20px', textAlign: 'center' },
  subtotal: { fontWeight: '600', minWidth: '60px', textAlign: 'right' },
  remove: { background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '1rem' },
  summary: { background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', position: 'sticky', top: '80px' },
  summaryTitle: { marginBottom: '1rem', fontSize: '1.2rem' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem' },
  divider: { borderTop: '1px solid #eee', margin: '1rem 0' },
  checkoutBtn: { width: '100%', padding: '0.875rem', background: '#2d6a4f', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem', marginBottom: '0.75rem' },
  continueBtn: { display: 'block', textAlign: 'center', color: '#2d6a4f', fontSize: '0.9rem', textDecoration: 'underline' },
  empty: { textAlign: 'center', padding: '5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
  shopBtn: { background: '#2d6a4f', color: 'white', padding: '0.75rem 2rem', borderRadius: '8px', marginTop: '1rem' },
  error: { background: '#fee', color: '#c00', padding: '0.75rem', borderRadius: '4px', marginBottom: '1rem' }
};

export default CartPage;