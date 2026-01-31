import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Business Traveler",
    quote:
      "Booking with QuickStay was effortless. Clean rooms, great service, and smooth check-in.",
  },
  {
    name: "Priya Mehta",
    role: "Family Trip",
    quote:
      "Beautiful hotels and easy booking flow. My family had a wonderful experience.",
  },
  {
    name: "Rohan Verma",
    role: "Solo Explorer",
    quote:
      "QuickStay helped me find the perfect stay in minutes. Super smooth UI!",
  },
];

const stars = Array(5).fill(0);

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
          Guest Experiences
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Trusted by thousands of travelers worldwide.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Happy Guests", value: "10k+" },
            { label: "Hotels", value: "500+" },
            { label: "Cities", value: "120+" },
            { label: "Rating", value: "4.8★" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-1 text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 text-white flex items-center justify-center font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="flex mb-2">
                {stars.map((_, idx) => (
                  <span key={idx}>⭐</span>
                ))}
              </div>

              <p className="text-gray-600 text-sm">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
