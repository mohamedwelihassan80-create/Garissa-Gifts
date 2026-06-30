import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";
import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/api/products");

        // Display only the newest 8 products
        setProducts(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Loading Products...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              Featured Products
            </h2>

            <p className="text-gray-500 mt-2">
              Explore our latest arrivals.
            </p>
          </div>

          <Link
            to="/products"
            className="text-pink-600 font-semibold hover:underline"
          >
            View All →
          </Link>

        </div>

        {/* Products Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;