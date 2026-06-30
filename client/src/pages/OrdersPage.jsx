import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";
import Loader from "../components/Loader";


const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/api/orders/myorders");
        setOrders(data);
      } catch (err) {
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const totalSpent = orders.reduce(
    (sum, order) => sum + order.totalPrice,
    0
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return {
          background: "#DCFCE7",
          color: "#166534",
        };

      case "processing":
        return {
          background: "#DBEAFE",
          color: "#1D4ED8",
        };

      case "shipped":
        return {
          background: "#EDE9FE",
          color: "#6D28D9",
        };

      case "cancelled":
        return {
          background: "#FEE2E2",
          color: "#B91C1C",
        };

      default:
        return {
          background: "#FEF3C7",
          color: "#92400E",
        };
    }
  };

  if (loading) return <Loader />;

  return (
    <div style={styles.container}>
      {/* Header */}

      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>My Orders</h1>

          <p style={styles.subtitle}>
            Track your purchases and download your digital products.
          </p>
        </div>

        <div style={styles.stats}>
          <div style={styles.statCard}>
            <h2>{orders.length}</h2>
            <span>Total Orders</span>
          </div>

          <div style={styles.statCard}>
            <h2>KSh {totalSpent.toLocaleString()}</h2>
            <span>Total Spent</span>
          </div>
        </div>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {orders.length === 0 ? (
        <div style={styles.empty}>
          <h2>No Orders Yet</h2>

          <p>Looks like you haven't purchased anything.</p>

          <Link to="/products" style={styles.shopBtn}>
            Start Shopping
          </Link>
        </div>
      ) : (
        <div style={styles.list}>
          {orders.map((order) => (
            <div key={order._id} style={styles.card}>
              {/* Header */}

              <div style={styles.cardHeader}>
                <div>
                  <p style={styles.orderId}>
                    Order #
                    <strong>
                      {order._id.slice(-8).toUpperCase()}
                    </strong>
                  </p>

                  <p style={styles.date}>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>

                  <p style={styles.productCount}>
                    {order.orderItems.length} Product(s)
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      ...styles.status,
                      ...getStatusStyle(order.status),
                    }}
                  >
                    {order.status}
                  </span>

                  <h2 style={styles.total}>
                    KSh {order.totalPrice.toLocaleString()}
                  </h2>
                </div>
              </div>

              {/* Products */}

              <div style={styles.items}>
                {order.orderItems.map((item, index) => (
                  <div key={index} style={styles.item}>
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt={item.name}
                      style={styles.image}
                    />

                    <div style={styles.itemInfo}>
                      <h4>{item.name}</h4>

                      <p>
                        Qty: {item.qty} × KSh {item.price}
                      </p>
                    </div>

                    {item.file && order.status === "completed" && (
                      <a
                        href={`http://localhost:5000/${item.file}`}
                        download={item.fileName}
                        style={styles.download}
                      >
                        Download
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}

              <div style={styles.footer}>
                <Link
                  to={`/orders/${order._id}`}
                  style={styles.details}
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px",
    flexWrap: "wrap",
    gap: "20px",
  },

  title: {
    fontSize: "2.4rem",
    fontWeight: "700",
    color: "#DB2777",
  },

  subtitle: {
    color: "#666",
    marginTop: "8px",
  },

  stats: {
    display: "flex",
    gap: "15px",
  },

  statCard: {
    background: "#fff",
    padding: "18px 25px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,.08)",
    textAlign: "center",
    minWidth: "140px",
  },

  error: {
    color: "red",
    marginBottom: "20px",
  },

  empty: {
    textAlign: "center",
    padding: "80px",
  },

  shopBtn: {
    background: "#DB2777",
    color: "#fff",
    padding: "12px 28px",
    borderRadius: "8px",
    display: "inline-block",
    marginTop: "20px",
    textDecoration: "none",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  card: {
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0,0,0,.08)",
    transition: ".3s",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderBottom: "1px solid #eee",
    flexWrap: "wrap",
    gap: "20px",
  },

  orderId: {
    fontWeight: "600",
  },

  date: {
    color: "#777",
    marginTop: "6px",
  },

  productCount: {
    marginTop: "6px",
    color: "#999",
    fontSize: "14px",
  },

  status: {
    padding: "6px 15px",
    borderRadius: "20px",
    fontWeight: "600",
    fontSize: "14px",
    textTransform: "capitalize",
  },

  total: {
    marginTop: "10px",
    color: "#DB2777",
  },

  items: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  image: {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  itemInfo: {
    flex: 1,
  },

  download: {
    background: "#DB2777",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "14px",
  },

  footer: {
    borderTop: "1px solid #eee",
    padding: "18px 20px",
    textAlign: "right",
  },

  details: {
    color: "#DB2777",
    fontWeight: "600",
    textDecoration: "none",
  },
};

export default OrdersPage;