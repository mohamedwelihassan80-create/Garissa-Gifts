import { Link } from "react-router-dom";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <img
          src={
            product.image
              ? `http://localhost:5000/${product.image}`
              : "/placeholder.jpg"
          }
          alt={product.name}
          className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        {product.stock === 0 && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            Out of Stock
          </span>
        )}

      </div>

      {/* Product Details */}

      <div className="p-5">

        <p className="text-pink-600 text-sm font-semibold uppercase">
          {product.category}
        </p>

        <h3 className="text-xl font-bold mt-2 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-5 flex justify-between items-center">

          <span className="text-2xl font-bold text-pink-600">
            KSh {Number(product.price).toLocaleString()}
          </span>

        </div>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/products/${product._id}`}
            className="flex-1 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition"
          >
            <FaEye />
            View
          </Link>

          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="flex-1 flex items-center justify-center gap-2 border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaShoppingCart />
            Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;