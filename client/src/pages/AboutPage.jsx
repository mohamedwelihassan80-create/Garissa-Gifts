import { Link } from "react-router-dom";
import {
  FaGift,
  FaHeart,
  FaUsers,
  FaTruck,
  FaShieldAlt,
  FaSmile,
  FaBullseye,
  FaEye,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    number: "10,000+",
    title: "Products Delivered",
  },
  {
    number: "5,000+",
    title: "Happy Customers",
  },
  {
    number: "100%",
    title: "Secure Shopping",
  },
  {
    number: "24/7",
    title: "Customer Support",
  },
];

const values = [
  {
    icon: <FaHeart className="text-5xl text-pink-600" />,
    title: "Customer First",
    description:
      "Every decision we make focuses on providing the best shopping experience for our customers.",
  },
  {
    icon: <FaTruck className="text-5xl text-green-600" />,
    title: "Fast Delivery",
    description:
      "We ensure timely delivery across Garissa and throughout Kenya.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-blue-600" />,
    title: "Secure Payments",
    description:
      "Your payments and personal information remain protected at all times.",
  },
  {
    icon: <FaAward className="text-5xl text-yellow-500" />,
    title: "Premium Quality",
    description:
      "We carefully select products that meet the highest standards.",
  },
];

const team = [
  {
    name: "Gift Specialists",
    role: "Helping customers choose perfect gifts.",
  },
  {
    name: "Florists",
    role: "Creating beautiful flower arrangements.",
  },
  {
    name: "Delivery Team",
    role: "Ensuring every gift arrives safely.",
  },
];

const AboutPage = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-r from-pink-600 to-rose-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            About Garissa Gifts & Flowers Hub
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto leading-8">
            We believe every gift tells a story. Our mission is to make every
            celebration unforgettable through beautiful flowers, thoughtful
            gifts, premium hampers and exceptional customer service.
          </p>

        </div>

      </section>

      {/* Story */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Garissa Gifts & Flowers Hub was founded with one simple goal:
              helping people celebrate life's most memorable moments.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              Whether it's birthdays, weddings, graduations, anniversaries,
              Mother's Day or Valentine's Day, we provide quality gifts that
              create lasting memories.
            </p>

            <Link
              to="/products"
              className="bg-pink-600 text-white px-8 py-3 rounded-xl hover:bg-pink-700"
            >
              Shop Now
            </Link>

          </div>

          <div className="bg-pink-50 rounded-3xl p-10">

            <FaGift className="text-8xl text-pink-600 mx-auto mb-6" />

            <h3 className="text-3xl font-bold text-center">
              Making Every Gift Special
            </h3>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <FaBullseye className="text-5xl text-pink-600 mb-5" />

            <h3 className="text-3xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              To provide affordable, premium-quality gifts and flowers with
              exceptional customer service and reliable delivery.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <FaEye className="text-5xl text-green-600 mb-5" />

            <h3 className="text-3xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              To become Kenya's leading online destination for gifts and flowers.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            {stats.map((item) => (

              <div
                key={item.title}
                className="bg-white shadow-lg rounded-3xl p-10 text-center"
              >

                <h2 className="text-5xl font-bold text-pink-600">
                  {item.number}
                </h2>

                <p className="mt-4 text-gray-600">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Values */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((value) => (

              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-2xl transition"
              >

                <div className="flex justify-center">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Team */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-14">
            Our Amazing Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {team.map((member) => (

              <div
                key={member.name}
                className="bg-white shadow-lg rounded-3xl p-10 text-center"
              >

                <FaUsers className="text-6xl text-pink-600 mx-auto mb-5" />

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {member.role}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-pink-600 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <FaSmile className="text-7xl mx-auto mb-8" />

          <h2 className="text-5xl font-bold">
            Ready to Make Someone Smile?
          </h2>

          <p className="mt-6 text-lg">
            Browse hundreds of gifts and flowers for every special occasion.
          </p>

          <Link
            to="/products"
            className="inline-block mt-10 bg-white text-pink-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100"
          >
            Start Shopping
          </Link>

        </div>

      </section>
    </>
  );
};

export default AboutPage;