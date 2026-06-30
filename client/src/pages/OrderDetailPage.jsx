import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import Loader from "../components/Loader";

const OrderDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await API.get(`/api/orders/${id}`);
        setOrder(data);
      } catch (err) {
        setError("Order not found");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <p
        style={{
          textAlign: "center",
          padding: "2rem",
          color: "red",
        }}
      >
        {error}
      </p>
    );
  }

  return (
    <div style={styles.container}>
      <button onClick={() => navigate("/orders")} style={styles.back}>
        ← Back to Orders
      </button>

      <h1 style={styles.title}>
        Order #{order._id.slice(-8).toUpperCase()}
      </h1>

      <div
        style={{
          ...styles.banner,
          background:
            order.status === "completed" ? "#e8f5e9" : "#fff3e0",
        }}
      >
        <span
          style={{
            color:
              order.status === "completed"
                ? "#2d6a4f"
                : "#e65100",
            fontWeight: "600",
          }}
        >
          Status:{" "}
          {order.status.charAt(0).toUpperCase() +
            order.status.slice(1)}
        </span>

        <span style={styles.bannerDate}>
          Placed on{" "}
          {new Date(order.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Items Ordered</h2>

        {order.orderItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          order.orderItems.map((item, index) => (
            <div key={index} style={styles.item}>
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

              <div style={styles.itemInfo}>
                <p style={styles.itemName}>{item.name}</p>

                <p style={styles.itemMeta}>
                  KSh {item.price.toLocaleString()} × {item.qty} ={" "}
                  <strong>
                    KSh {(item.price * item.qty).toLocaleString()}
                  </strong>
                </p>
              </div>

              {item.file && order.status === "completed" && (
                <a
                  href={`http://localhost:5000/${item.file}`}
                  download={item.fileName}
                  style={styles.downloadBtn}
                >
                  ⬇ Download
                </a>
              )}
            </div>
          ))
        )}
      </div>

      <div style={styles.summary}>
        <div style={styles.summaryRow}>
          <span>Items Total</span>
          <span>KSh {order.totalPrice.toLocaleString()}</span>
        </div>

        <div style={styles.summaryRow}>
          <span>Delivery</span>
          <span style={{ color: "#2d6a4f" }}>Free</span>
        </div>

        <div style={styles.divider}></div>

        <div
          style={{
            ...styles.summaryRow,
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          <span>Total Paid</span>
          <span>KSh {order.totalPrice.toLocaleString()}</span>
        </div>
      </div>

      <div style={styles.buttonRow}>
        <button
          onClick={() => navigate("/orders")}
          style={styles.backBtn}
        >
          Back to Orders
        </button>

        <button
          onClick={() => navigate("/products")}
          style={styles.shopBtn}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem 1rem",
  },

  back: {
    background: "none",
    border: "none",
    color: "#db2777",
    cursor: "pointer",
    fontSize: "1rem",
    marginBottom: "1rem",
  },

  title: {
    color: "#111827",
    marginBottom: "1rem",
  },

  banner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    gap: "10px",
  },

  bannerDate: {
    color: "#666",
    fontSize: ".9rem",
  },

  card: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,.08)",
    marginBottom: "1.5rem",
  },

  cardTitle: {
    marginBottom: "1rem",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 0",
    borderBottom: "1px solid #eee",
  },

  imageBox: {
    width: "70px",
    height: "70px",
    overflow: "hidden",
    borderRadius: "8px",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  emoji: {
    fontSize: "2rem",
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontWeight: "600",
    marginBottom: ".3rem",
  },

  itemMeta: {
    color: "#666",
    fontSize: ".9rem",
  },

  downloadBtn: {
    background: "#16a34a",
    color: "#fff",
    padding: ".6rem 1rem",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },

  summary: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,.08)",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: ".8rem",
  },

  divider: {
    borderTop: "1px solid #ddd",
    margin: "1rem 0",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    marginTop: "2rem",
    flexWrap: "wrap",
  },

  backBtn: {
    padding: "12px 22px",
    border: "none",
    borderRadius: "8px",
    background: "#6b7280",
    color: "#fff",
    cursor: "pointer",
  },

  shopBtn: {
    padding: "12px 22px",
    border: "none",
    borderRadius: "8px",
    background: "#db2777",
    color: "#fff",
    cursor: "pointer",
  },
};

export default OrderDetailPage;