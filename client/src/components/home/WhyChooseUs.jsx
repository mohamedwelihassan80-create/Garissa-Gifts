import {
  FaTruck,
  FaGift,
  FaLock,
  FaHeadset,
  FaLeaf,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-5xl text-pink-600" />,
    title: "Fast Delivery",
    description:
      "Same-day delivery within Garissa Town and fast nationwide shipping across Kenya.",
  },
  {
    icon: <FaGift className="text-5xl text-green-600" />,
    title: "Beautiful Gift Wrapping",
    description:
      "Every order is professionally wrapped to create a memorable gifting experience.",
  },
  {
    icon: <FaLeaf className="text-5xl text-emerald-600" />,
    title: "Fresh Flowers",
    description:
      "Freshly sourced flowers arranged by experienced florists to guarantee quality.",
  },
  {
    icon: <FaLock className="text-5xl text-blue-600" />,
    title: "Secure Shopping",
    description:
      "Your personal information is protected with secure authentication and encrypted communication.",
  },
  {
    icon: <FaHeadset className="text-5xl text-orange-500" />,
    title: "24/7 Customer Support",
    description:
      "Friendly customer support ready to assist before, during and after your purchase.",
  },
  {
    icon: <FaSmile className="text-5xl text-yellow-500" />,
    title: "Customer Satisfaction",
    description:
      "We are committed to delivering quality products that exceed customer expectations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            Why Shop With Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            We Make Every Gift Special
          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto leading-8">
            At Garissa Gifts & Flowers Hub, we believe every gift tells a
            story. From beautiful flowers to premium gift hampers, we ensure
            every order is delivered with care, quality and love.
          </p>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

        {/* Statistics */}

        <div className="mt-24 border-t pt-16">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-extrabold text-pink-600">
                250+
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Products Delivered
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-pink-600">
                120+
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-pink-600">
                100%
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Secure Shopping
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-pink-600">
                24/7
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Customer Support
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;