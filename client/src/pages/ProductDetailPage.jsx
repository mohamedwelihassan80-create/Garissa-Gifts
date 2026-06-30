import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaStar,
  FaFileAlt,
} from "react-icons/fa";

import API from "../api/axios";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const { data } = await API.get(`/api/products/${id}`);

      setProduct(data);

      const related = await API.get("/api/products");

      setRelatedProducts(
        related.data
          .filter(
            (item) =>
              item.category === data.category &&
              item._id !== data._id
          )
          .slice(0, 4)
      );
    } catch (err) {
      setError("Product not found");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    addToCart({
      ...product,
      quantity,
    });

    navigate("/cart");
  };

  if (loading) return <Loader />;

  if (error)
    return (
      <div className="py-20 text-center text-red-500">
        {error}
      </div>
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold mb-8"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="grid lg:grid-cols-2 gap-16">

        <div>

          {product.image ? (

            <img
              src={`http://localhost:5000/${product.image}`}
              alt={product.name}
              className="rounded-3xl shadow-xl w-full"
            />

          ) : (

            <div className="h-[500px] rounded-3xl bg-gray-200 flex items-center justify-center text-8xl">
              🎁
            </div>

          )}

        </div>

        <div>

          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">
            {product.name}
          </h1>

          <div className="flex items-center gap-1 mt-5">

            {[1,2,3,4,5].map((star)=>(
              <FaStar
                key={star}
                className="text-yellow-400"
              />
            ))}

            <span className="ml-3 text-gray-500">
              (24 Reviews)
            </span>

          </div>

          <h2 className="text-4xl font-bold text-pink-600 mt-8">
            KSh {product.price}
          </h2>

          <p className="text-gray-600 leading-8 mt-8">
            {product.description}
          </p>

          <div className="mt-8">

            <p className="font-semibold">

              Stock:

              <span className="ml-2 text-green-600">

                {product.stock > 0
                  ? `${product.stock} Available`
                  : "Out of Stock"}

              </span>

            </p>

          </div>

          {product.fileName && (

            <div className="bg-pink-50 rounded-xl p-4 mt-6 flex items-center gap-3">

              <FaFileAlt className="text-pink-600" />

              <span>{product.fileName}</span>

            </div>

          )}

          <div className="flex items-center gap-5 mt-10">

            <button
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
              className="w-10 h-10 border rounded-lg"
            >
              -
            </button>

            <span className="text-xl font-bold">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="w-10 h-10 border rounded-lg"
            >
              +
            </button>

          </div>

          <button
            disabled={product.stock === 0}
            onClick={handleAddToCart}
            className="mt-10 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white px-10 py-4 rounded-xl flex items-center gap-3"
          >
            <FaShoppingCart />

            {product.stock === 0
              ? "Out of Stock"
              : "Add To Cart"}

          </button>

        </div>

      </div>

      {relatedProducts.length > 0 && (

        <div className="mt-24">

          <h2 className="text-4xl font-bold mb-10">
            Related Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {relatedProducts.map((item) => (

              <ProductCard
                key={item._id}
                product={item}
              />

            ))}

          </div>

        </div>

      )}

    </section>
  );
};

export default ProductDetailPage;