import { Link } from "react-router-dom";
import {
  FaGift,
  FaBirthdayCake,
  FaHeart,
  FaGem,
  FaGlassCheers,
  FaCandyCane,
} from "react-icons/fa";

const categories = [
  {
    name: "Flowers",
    slug: "Flowers",
    icon: <FaHeart className="text-4xl text-red-500" />,
    color: "from-pink-100 to-red-100",
  },
  {
    name: "Cakes",
    slug: "Cakes",
    icon: <FaBirthdayCake className="text-4xl text-orange-500" />,
    color: "from-orange-100 to-yellow-100",
  },
  {
    name: "Gift Hampers",
    slug: "Gift Hampers",
    icon: <FaGift className="text-4xl text-green-600" />,
    color: "from-green-100 to-emerald-100",
  },
  {
    name: "Jewellery",
    slug: "Jewellery",
    icon: <FaGem className="text-4xl text-purple-600" />,
    color: "from-purple-100 to-pink-100",
  },
  {
    name: "Perfumes",
    slug: "Perfumes",
    icon: <FaGlassCheers className="text-4xl text-blue-600" />,
    color: "from-blue-100 to-cyan-100",
  },
  {
    name: "Chocolates",
    slug: "Chocolates",
    icon: <FaCandyCane className="text-4xl text-amber-700" />,
    color: "from-amber-100 to-yellow-100",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            Browse Collections
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Shop by Category
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto leading-7">
            Whether you're celebrating a birthday, wedding, anniversary,
            graduation, Valentine's Day, Mother's Day or simply showing
            someone you care, we have the perfect gift for every occasion.
          </p>

        </div>

        {/* Categories Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {categories.map((category) => (

            <Link
              key={category.slug}
              to={`/products?category=${category.slug}`}
              className={`group bg-gradient-to-br ${category.color}
              rounded-3xl p-8 shadow-md hover:shadow-2xl
              transition-all duration-300 hover:-translate-y-2`}
            >

              <div className="flex justify-center">

                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow group-hover:scale-110 transition duration-300">

                  {category.icon}

                </div>

              </div>

              <h3 className="mt-6 text-center text-lg font-bold text-gray-800 group-hover:text-pink-600 transition">

                {category.name}

              </h3>

              <p className="text-center text-gray-500 text-sm mt-2">

                Explore Collection →

              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;