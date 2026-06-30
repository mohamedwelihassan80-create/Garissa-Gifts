import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-r from-pink-600 to-rose-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            We'd love to hear from you. Reach out for inquiries,
            orders, partnerships or customer support.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}

          <div>

            <h2 className="text-4xl font-bold mb-8">

              Send Us a Message

            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4"
              />

              <button
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div>

            <h2 className="text-4xl font-bold mb-8">

              Get In Touch

            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">

                <FaMapMarkerAlt className="text-pink-600 text-3xl mt-1"/>

                <div>

                  <h3 className="font-bold text-xl">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    Garissa Town, Kenya
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <FaPhoneAlt className="text-pink-600 text-3xl mt-1"/>

                <div>

                  <h3 className="font-bold text-xl">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +254 757 6343 44
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <FaEnvelope className="text-pink-600 text-3xl mt-1"/>

                <div>

                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    info@garissagifts.co.ke
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <FaClock className="text-pink-600 text-3xl mt-1"/>

                <div>

                  <h3 className="font-bold text-xl">
                    Working Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday - Sunday
                  </p>

                  <p className="text-gray-600">
                    8:00 AM - 8:00 PM
                  </p>

                </div>

              </div>

            </div>

            {/* Social Media */}

            <div className="mt-12">

              <h3 className="text-2xl font-bold mb-5">

                Follow Us

              </h3>

              <div className="flex gap-6 text-4xl">

                <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition"/>

                <FaInstagram className="text-pink-600 cursor-pointer hover:scale-110 transition"/>

                <FaWhatsapp className="text-green-600 cursor-pointer hover:scale-110 transition"/>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Google Map Placeholder */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">

            <div className="text-center">

              <FaMapMarkerAlt className="text-6xl text-pink-600 mx-auto"/>

              <h2 className="text-3xl font-bold mt-5">

                Google Maps Location

              </h2>

              <p className="text-gray-600 mt-4">

                Embed your Google Maps location here.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">

            Frequently Asked Questions

          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow p-6">

              <h3 className="font-bold text-xl">

                Do you offer same-day delivery?

              </h3>

              <p className="text-gray-600 mt-3">

                Yes, within Garissa Town depending on the order time.

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

              <h3 className="font-bold text-xl">

                Which payment methods do you accept?

              </h3>

              <p className="text-gray-600 mt-3">

                M-Pesa, Debit Cards and Bank Transfers.

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

              <h3 className="font-bold text-xl">

                Can I customize a gift hamper?

              </h3>

              <p className="text-gray-600 mt-3">

                Absolutely! Contact us and we'll create a personalized gift.

              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default ContactPage;