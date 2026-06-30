import { useState, useEffect } from 'react';
import API from '../api/axios';
import Loader from '../components/Loader';

const AdminPage = () => {
  const [tab, setTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '', description: '', price: '', category: 'gifts', stock: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [digitalFile, setDigitalFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
    fetchUnreadCount();
  }, [tab]);

  const fetchUnreadCount = async () => {
    try {
      const { data } = await API.get('/api/notifications/unread-count');
      setUnreadCount(data.count);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      if (tab === 'products') {
        const { data } = await API.get('/api/products');
        setProducts(data);
      } else if (tab === 'orders') {
        const { data } = await API.get('/api/orders');
        setOrders(data);
      } else if (tab === 'notifications') {
        const { data } = await API.get('/api/notifications');
        setNotifications(data);
        setUnreadCount(0);
      }
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccessMsg('');
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('description', form.description);
      formData.append('price', form.price);
      formData.append('category', form.category);
      formData.append('stock', form.stock || 1);
      if (imageFile) formData.append('image', imageFile);
      if (digitalFile) formData.append('file', digitalFile);

      if (editingId) {
        await API.put(`/api/products/${editingId}`, formData);
        setSuccessMsg('Product updated successfully!');
      } else {
        await API.post('/api/products', formData);
        setSuccessMsg('Product created successfully!');
      }

      setForm({ name: '', description: '', price: '', category: 'gifts', stock: '' });
      setImageFile(null);
      setDigitalFile(null);
      setEditingId(null);
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save product');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock
    });
    setEditingId(product._id);
    setTab('products');
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await API.delete(`/api/products/${id}`);
      fetchData();
    } catch (err) {
      setError('Failed to delete product');
    }
  };

  const handleStatusUpdate = async (orderId, status) => {
    try {
      await API.put(`/api/orders/${orderId}/status`, { status });
      fetchData();
    } catch (err) {
      setError('Failed to update order status');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      {/* Stats */}
      <div style={styles.stats}>
        <div style={styles.statCard}>
          <p style={styles.statNumber}>{products.length}</p>
          <p style={styles.statLabel}>Total Products</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statNumber}>{orders.length}</p>
          <p style={styles.statLabel}>Total Orders</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statNumber}>
            KSh {orders.reduce((acc, o) => acc + o.totalPrice, 0).toFixed(2)}
          </p>
          <p style={styles.statLabel}>Total Revenue</p>
        </div>
        <div style={styles.statCard}>
          <p style={styles.statNumber}>{unreadCount}</p>
          <p style={styles.statLabel}>Unread Notifications</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={{ ...styles.tab, ...(tab === 'products' ? styles.tabActive : {}) }}
          onClick={() => setTab('products')}
        >
          Products
        </button>
        <button
          style={{ ...styles.tab, ...(tab === 'orders' ? styles.tabActive : {}) }}
          onClick={() => setTab('orders')}
        >
          Orders
        </button>
        <button
          style={{ ...styles.tab, ...(tab === 'notifications' ? styles.tabActive : {}) }}
          onClick={() => setTab('notifications')}
        >
          🔔 Notifications {unreadCount > 0 && `(${unreadCount})`}
        </button>
      </div>

      {error && <div style={styles.error}>{error}</div>}
      {successMsg && <div style={styles.success}>{successMsg}</div>}

      {/* Products Tab */}
      {tab === 'products' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              {editingId ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={styles.grid2}>
                <div style={styles.field}>
                  <label style={styles.label}>Product Name</label>
                  <input style={styles.input} name='name' value={form.name} onChange={handleFormChange} placeholder='Product name' required />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>Category</label>
                  <select style={styles.input} name='category' value={form.category} onChange={handleFormChange}>
                    <option value='gifts'>Gifts</option>
                    <option value='flowers'>Flowers</option>
                    <option value='cards'>Cards</option>
                    <option value='bundles'>Bundles</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Description</label>
                <textarea style={{ ...styles.input, height: '80px', resize: 'vertical' }} name='description' value={form.description} onChange={handleFormChange} placeholder='Product description' required />
              </div>

              <div style={styles.grid2}>
                <div style={styles.field}>
                  <label style={styles.label}>Price (KSh)</label>
                  <input style={styles.input} name='price' type='number' value={form.price} onChange={handleFormChange} placeholder='0' required />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>Stock</label>
                  <input style={styles.input} name='stock' type='number' value={form.stock} onChange={handleFormChange} placeholder='1' />
                </div>
              </div>

              <div style={styles.grid2}>
                <div style={styles.field}>
                  <label style={styles.label}>Product Image</label>
                  <input style={styles.input} type='file' accept='image/*' onChange={(e) => setImageFile(e.target.files[0])} />
                </div>
                <div style={styles.field}>
                  <label style={styles.label}>Digital File (PDF/ZIP)</label>
                  <input style={styles.input} type='file' accept='.pdf,.zip,.jpg,.png' onChange={(e) => setDigitalFile(e.target.files[0])} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={styles.submitBtn} type='submit' disabled={submitting}>
                  {submitting ? 'Saving...' : editingId ? 'Update Product' : 'Add Product'}
                </button>
                {editingId && (
                  <button type='button' style={styles.cancelBtn} onClick={() => { setEditingId(null); setForm({ name: '', description: '', price: '', category: 'gifts', stock: '' }); }}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>All Products ({products.length})</h2>
            {loading ? <Loader /> : (
              <table style={styles.table}>
                <thead>
                  <tr style={styles.tableHeader}>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Category</th>
                    <th style={styles.th}>Price</th>
                    <th style={styles.th}>Stock</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} style={styles.tr}>
                      <td style={styles.td}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {product.image ? (
                            <img src={`http://localhost:5000/${product.image}`} alt={product.name} style={{ width: '35px', height: '35px', borderRadius: '4px', objectFit: 'cover' }} />
                          ) : (
                            <span>🎁</span>
                          )}
                          {product.name}
                        </div>
                      </td>
                      <td style={styles.td}><span style={styles.catBadge}>{product.category}</span></td>
                      <td style={styles.td}>KSh {product.price}</td>
                      <td style={styles.td}>{product.stock}</td>
                      <td style={styles.td}>
                        <button style={styles.editBtn} onClick={() => handleEdit(product)}>Edit</button>
                        <button style={styles.deleteBtn} onClick={() => handleDelete(product._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {tab === 'orders' && (
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>All Orders ({orders.length})</h2>
          {loading ? <Loader /> : orders.length === 0 ? (
            <p style={{ color: '#666', padding: '1rem' }}>No orders yet.</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeader}>
                  <th style={styles.th}>Order ID</th>
                  <th style={styles.th}>Customer</th>
                  <th style={styles.th}>Total</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Update</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} style={styles.tr}>
                    <td style={styles.td}>#{order._id.slice(-8).toUpperCase()}</td>
                    <td style={styles.td}>
                      <div>{order.user?.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#999' }}>{order.user?.email}</div>
                    </td>
                    <td style={styles.td}>KSh {order.totalPrice.toFixed(2)}</td>
                    <td style={styles.td}>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td style={styles.td}>
                      <span style={{ ...styles.statusBadge, background: order.status === 'completed' ? '#e8f5e9' : '#fff3e0', color: order.status === 'completed' ? '#2d6a4f' : '#e65100' }}>
                        {order.status}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <select style={styles.statusSelect} value={order.status} onChange={(e) => handleStatusUpdate(order._id, e.target.value)}>
                        <option value='pending'>Pending</option>
                        <option value='processing'>Processing</option>
                        <option value='completed'>Completed</option>
                        <option value='cancelled'>Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Notifications Tab */}
      {tab === 'notifications' && (
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={styles.cardTitle}>Notifications</h2>
            <button
              style={{ ...styles.editBtn, padding: '0.5rem 1rem' }}
              onClick={async () => {
                await API.put('/api/notifications/read-all');
                setUnreadCount(0);
                fetchData();
              }}
            >
              Mark All Read
            </button>
          </div>
          {loading ? <Loader /> : notifications.length === 0 ? (
            <p style={{ color: '#666' }}>No notifications yet.</p>
          ) : (
            notifications.map((n) => (
              <div key={n._id} style={{ ...styles.notifItem, background: n.isRead ? 'white' : '#f0f7f4' }}>
                <span style={styles.notifIcon}>
                  {n.type === 'order' ? '🛍️' : n.type === 'login' ? '👤' : '✨'}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={styles.notifMsg}>{n.message}</p>
                  <p style={styles.notifTime}>{new Date(n.createdAt).toLocaleString()}</p>
                </div>
                {!n.isRead && <span style={styles.unreadDot} />}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' },
  title: { marginBottom: '1.5rem', color: '#2d6a4f' },
  stats: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' },
  statCard: { background: 'white', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  statNumber: { fontSize: '2rem', fontWeight: 'bold', color: '#2d6a4f', margin: '0 0 0.25rem' },
  statLabel: { fontSize: '0.85rem', color: '#666', margin: 0 },
  tabs: { display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' },
  tab: { padding: '0.6rem 1.5rem', border: '1px solid #2d6a4f', background: 'white', color: '#2d6a4f', borderRadius: '6px', cursor: 'pointer', fontSize: '0.95rem' },
  tabActive: { background: '#2d6a4f', color: 'white' },
  error: { background: '#fee', color: '#c00', padding: '0.75rem', borderRadius: '6px', marginBottom: '1rem' },
  success: { background: '#e8f5e9', color: '#2d6a4f', padding: '0.75rem', borderRadius: '6px', marginBottom: '1rem' },
  card: { background: 'white', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '1.5rem' },
  cardTitle: { marginBottom: '1.25rem', fontSize: '1.1rem', color: '#333' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  field: { marginBottom: '1rem' },
  label: { display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem', fontWeight: '500', color: '#555' },
  input: { width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' },
  submitBtn: { padding: '0.7rem 2rem', background: '#2d6a4f', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.95rem' },
  cancelBtn: { padding: '0.7rem 2rem', background: '#f5f5f5', color: '#333', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', fontSize: '0.95rem' },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHeader: { background: '#f8f8f8' },
  th: { padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: '#555', borderBottom: '2px solid #eee' },
  tr: { borderBottom: '1px solid #f0f0f0' },
  td: { padding: '0.75rem 1rem', fontSize: '0.9rem', verticalAlign: 'middle' },
  catBadge: { background: '#e8f5e9', color: '#2d6a4f', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.8rem' },
  editBtn: { background: '#e8f5e9', color: '#2d6a4f', border: 'none', padding: '0.3rem 0.75rem', borderRadius: '4px', cursor: 'pointer', marginRight: '0.5rem', fontSize: '0.85rem' },
  deleteBtn: { background: '#fee', color: '#c00', border: 'none', padding: '0.3rem 0.75rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' },
  statusBadge: { padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' },
  statusSelect: { padding: '0.3rem 0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.85rem' },
  notifItem: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem', border: '1px solid #eee' },
  notifIcon: { fontSize: '1.5rem' },
  notifMsg: { fontSize: '0.9rem', color: '#333', margin: '0 0 0.25rem' },
  notifTime: { fontSize: '0.75rem', color: '#999', margin: 0 },
  unreadDot: { width: '10px', height: '10px', background: '#2d6a4f', borderRadius: '50%', flexShrink: 0 }
};

export default AdminPage;
