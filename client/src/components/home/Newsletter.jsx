import { FaPaperPlane, FaGift } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-white text-pink-600 p-4 rounded-full">

                <FaGift className="text-3xl" />

              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                Never Miss a Special Gift
              </h2>

            </div>

            <p className="text-lg text-pink-100 leading-8">

              Subscribe to our newsletter and be the first to know about
              exclusive discounts, seasonal flower collections,
              birthday offers, wedding packages and new arrivals.

            </p>

            <div className="flex flex-wrap gap-8 mt-10">

              <div>

                <h3 className="text-3xl font-bold">
                  500+
                </h3>

                <p className="text-pink-100">
                  Subscribers
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Weekly
                </h3>

                <p className="text-pink-100">
                  New Offers
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  100%
                </h3>

                <p className="text-pink-100">
                  No Spam
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-2xl p-10 text-gray-800">

            <h3 className="text-3xl font-bold mb-4">

              Join Our Community

            </h3>

            <p className="text-gray-500 mb-8">

              Receive exclusive offers and gift inspiration directly
              in your inbox.

            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-3 transition"
              >

                <FaPaperPlane />

                Subscribe Now

              </button>

            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">

              We respect your privacy. You can unsubscribe anytime.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;