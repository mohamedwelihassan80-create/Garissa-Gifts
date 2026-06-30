import { Link } from "react-router-dom";
import {
  FaHeart,
  FaBirthdayCake,
  FaGift,
  FaGem,
  FaGlassCheers,
  FaCandyCane,
  FaRing,
  FaBaby,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const categories = [
  {
    name: "Flowers",
    icon: <FaHeart className="text-6xl text-red-500" />,
    description: "Fresh roses, lilies, tulips and beautiful bouquets.",
    color: "from-pink-100 to-red-100",
  },
  {
    name: "Cakes",
    icon: <FaBirthdayCake className="text-6xl text-orange-500" />,
    description: "Birthday, wedding and celebration cakes.",
    color: "from-orange-100 to-yellow-100",
  },
  {
    name: "Gift Hampers",
    icon: <FaGift className="text-6xl text-green-600" />,
    description: "Luxury gift baskets for every occasion.",
    color: "from-green-100 to-emerald-100",
  },
  {
    name: "Jewellery",
    icon: <FaGem className="text-6xl text-purple-600" />,
    description: "Elegant jewellery for your loved ones.",
    color: "from-purple-100 to-pink-100",
  },
  {
    name: "Perfumes",
    icon: <FaGlassCheers className="text-6xl text-blue-600" />,
    description: "Premium fragrances for men and women.",
    color: "from-blue-100 to-cyan-100",
  },
  {
    name: "Chocolates",
    icon: <FaCandyCane className="text-6xl text-amber-700" />,
    description: "Sweet treats from trusted brands.",
    color: "from-amber-100 to-yellow-100",
  },
];

const occasions = [
  {
    title: "Birthdays",
    icon: <FaBirthdayCake />,
  },
  {
    title: "Weddings",
    icon: <FaRing />,
  },
  {
    title: "Baby Showers",
    icon: <FaBaby />,
  },
  {
    title: "Graduations",
    icon: <FaGraduationCap />,
  },
  {
    title: "Corporate Gifts",
    icon: <FaBriefcase />,
  },
];

const CategoriesPage = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-r from-pink-600 to-rose-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Shop by Category
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            Browse our carefully selected collection of flowers,
            gifts and celebration items designed for every special
            occasion.
          </p>

        </div>

      </section>

      {/* Categories */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {categories.map((category) => (

              <div
                key={category.name}
                className={`bg-gradient-to-br ${category.color}
                rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300`}
              >

                <div className="flex justify-center">

                  {category.icon}

                </div>

                <h2 className="text-3xl font-bold text-center mt-6">

                  {category.name}

                </h2>

                <p className="text-center text-gray-700 mt-4 leading-7">

                  {category.description}

                </p>

                <Link
                  to={`/products?category=${category.name}`}
                  className="block mt-8 text-center bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700"
                >
                  Explore
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Shop By Occasion */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">

            Shop by Occasion

          </h2>

          <div className="grid md:grid-cols-5 gap-8">

            {occasions.map((occasion) => (

              <div
                key={occasion.title}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >

                <div className="text-5xl text-pink-600 flex justify-center">

                  {occasion.icon}

                </div>

                <h3 className="mt-5 text-xl font-bold">

                  {occasion.title}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Promo */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-gradient-to-r from-pink-600 to-red-500 rounded-3xl text-white p-16 text-center">

            <h2 className="text-5xl font-bold">

              Celebrate Every Moment

            </h2>

            <p className="mt-6 text-lg">

              Find the perfect gift for birthdays,
              anniversaries, weddings, graduations,
              Mother's Day and every special celebration.

            </p>

            <Link
              to="/products"
              className="inline-block mt-10 bg-white text-pink-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100"
            >
              Shop All Products
            </Link>

          </div>

        </div>

      </section>
    </>
  );
};

export default CategoriesPage;