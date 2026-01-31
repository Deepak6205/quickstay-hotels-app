import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
            About QuickStay
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            QuickStay makes hotel booking effortless. Discover trusted stays,
            transparent pricing, and smooth checkout — all in one place.
          </p>

          <p className="text-gray-600 mt-3 leading-relaxed">
            From business trips to family vacations, we help you travel better.
          </p>

          <div className="flex gap-8 mt-8">
            <div>
              <p className="text-2xl font-semibold">500+</p>
              <p className="text-sm text-gray-500">Hotels</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">120+</p>
              <p className="text-sm text-gray-500">Cities</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">10k+</p>
              <p className="text-sm text-gray-500">Bookings</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-8 bg-gradient-to-br from-indigo-50 to-blue-50 shadow">
          <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✔ Verified hotels</li>
            <li>✔ Secure Stripe payments</li>
            <li>✔ Smooth booking experience</li>
            <li>✔ Dedicated support</li>
            <li>✔ Best price guarantee</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
