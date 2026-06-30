import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid gap-4">

        <Link
          to="/admin/products/new"
          className="bg-pink-600 text-white text-center py-3 rounded-xl hover:bg-pink-700 transition"
        >
          + Add Product
        </Link>

        <Link
          to="/admin/orders"
          className="bg-blue-600 text-white text-center py-3 rounded-xl hover:bg-blue-700 transition"
        >
          View Orders
        </Link>

        <Link
          to="/admin/products"
          className="bg-green-600 text-white text-center py-3 rounded-xl hover:bg-green-700 transition"
        >
          Manage Products
        </Link>

      </div>

    </div>
  );
};

export default QuickActions;