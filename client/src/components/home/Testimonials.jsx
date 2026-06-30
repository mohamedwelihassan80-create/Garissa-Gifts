import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Amina Hassan",
    location: "Garissa",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "The flowers were fresh and beautifully arranged. Delivery was on time and the customer service was excellent. Highly recommended!",
  },
  {
    name: "Mohamed Ali",
    location: "Nairobi",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "I ordered a birthday gift hamper and it exceeded my expectations. The packaging was amazing and my wife loved it.",
  },
  {
    name: "Fatuma Noor",
    location: "Mombasa",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    review:
      "Excellent service from ordering to delivery. I will definitely shop here again for future occasions.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-pink-600 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto">
            We are proud to create memorable gifting experiences for our
            customers across Kenya.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((customer, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-8"
            >

              <div className="flex items-center gap-4">

                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {customer.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {customer.location}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mt-6">

                {[...Array(customer.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400"
                  />
                ))}

              </div>

              <p className="text-gray-600 mt-5 leading-7 italic">
                "{customer.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;