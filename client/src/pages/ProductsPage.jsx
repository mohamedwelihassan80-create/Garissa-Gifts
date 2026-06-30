import { useState, useEffect } from "react";
import API from "../api/axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ProductsBanner from "../components/products/ProductsBanner";

const categories = [
  "all",
  "flowers",
  "cakes",
  "gift hampers",
  "perfumes",
  "chocolates",
  "cards",
  "bundles",
];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, search, category, sort]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/api/products");

      setProducts(data);
    } catch (error) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = [...products];

    // Search

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category

    if (category !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Sorting

    if (sort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (sort === "newest") {
      filtered.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    filteredProducts.length;

    setFilteredProducts(filtered);
  };

  return (
    <>
      <ProductsBanner />

      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Search + Sort */}

        <div className="flex flex-col lg:flex-row gap-5 justify-between mb-10">

          <input
            type="text"
            placeholder="Search gifts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-5 py-3 w-full lg:w-96 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-xl px-5 py-3 lg:w-64"
          >
            <option value="newest">Newest</option>
            <option value="price-low">
              Price: Low to High
            </option>
            <option value="price-high">
              Price: High to Low
            </option>
          </select>

        </div>

        {/* Categories */}

        <div className="flex flex-wrap gap-3 mb-10">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full transition font-medium
              ${
                category === cat
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 hover:bg-pink-100"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>

          ))}

        </div>

        {/* Product Count */}

        <div className="mb-8">

          <h2 className="text-2xl font-bold">
            {filteredProducts.length} Products Found
          </h2>

        </div>

        {/* Products */}

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center text-red-500 py-20">
            {error}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-3xl font-bold">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-4">
              Try another search or category.
            </p>

          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product._id}
                product={product}
              />

            ))}

          </div>
        )}

      </section>
    </>
  );
};

export default ProductsPage;