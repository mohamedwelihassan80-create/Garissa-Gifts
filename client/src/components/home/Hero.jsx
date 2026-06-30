import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGift,
  FaTruck,
  FaLeaf,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-green-500">

      {/* Background Decorations */}

      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">

              🌹 Kenya's Trusted Gift Store

            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-white">

              Send Love

              <br />

              With Flowers,

              <br />

              Gifts & Cakes

            </h1>

            <p className="mt-6 text-lg text-green-100 leading-8">

              Celebrate birthdays, weddings, graduations,
              anniversaries and every unforgettable moment.

              Order premium flowers, chocolates,
              perfumes, cakes and thoughtful gifts
              delivered across Kenya.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/products"
                className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-green-700 hover:scale-105 transition"
              >
                Shop Now

                <FaArrowRight />
              </Link>

              <Link
                to="/categories"
                className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-green-700 transition"
              >
                Browse Categories
              </Link>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>

                <h2 className="text-3xl font-bold text-white">

                  500+

                </h2>

                <p className="text-green-100">

                  Products

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">

                  10K+

                </h2>

                <p className="text-green-100">

                  Happy Customers

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-white">

                  24/7

                </h2>

                <p className="text-green-100">

                  Support

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=900"
                alt="Flowers"
                className="rounded-2xl w-full h-[450px] object-cover"
              />

            </div>

            {/* Floating Cards */}

            <div className="absolute -left-6 top-12 bg-white rounded-xl shadow-xl p-4 flex gap-3">

              <FaTruck className="text-green-600 text-2xl" />

              <div>

                <h4 className="font-bold">

                  Same Day Delivery

                </h4>

                <p className="text-sm text-gray-500">

                  Across Kenya

                </p>

              </div>

            </div>

            <div className="absolute -right-6 bottom-12 bg-white rounded-xl shadow-xl p-4 flex gap-3">

              <FaStar className="text-yellow-500 text-2xl" />

              <div>

                <h4 className="font-bold">

                  4.9 / 5 Rating

                </h4>

                <p className="text-sm text-gray-500">

                  Trusted by Customers

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Features */}

      <div className="bg-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 py-10 px-6">

          <div className="flex items-center gap-4">

            <FaTruck className="text-3xl text-green-700" />

            <div>

              <h3 className="font-bold">

                Fast Delivery

              </h3>

              <p className="text-gray-500">

                Same day in selected towns

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <FaGift className="text-3xl text-pink-600" />

            <div>

              <h3 className="font-bold">

                Premium Gifts

              </h3>

              <p className="text-gray-500">

                Carefully selected products

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <FaLeaf className="text-3xl text-green-600" />

            <div>

              <h3 className="font-bold">

                Fresh Flowers

              </h3>

              <p className="text-gray-500">

                Delivered fresh every day

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;