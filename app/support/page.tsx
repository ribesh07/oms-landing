"use client";

import { MapPin, Mail, Phone, Headset, Building } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-10">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-emerald-600 mb-16">
        Contact Us
      </h2>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Address */}
        <div className="bg-green-50 border border-emerald-200 rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center">
              <MapPin className="text-emerald-600 w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Our Address</h3>
          <p className="text-gray-600">Teku, Kathmandu, Nepal</p>
        </div>

        {/* Email */}
        <div className="bg-green-50 border border-emerald-200 rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center">
              <Mail className="text-emerald-600 w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Email Us</h3>
          <p className="text-gray-600">info@globaltech.com.np</p>
        </div>

        {/* Call */}
        <div className="bg-green-50 border border-emerald-200 rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center">
              <Phone className="text-emerald-600 w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Call Us</h3>
          <p className="text-gray-600">01–5329949</p>
          <p className="text-gray-600">5329952</p>
        </div>

        {/* Support & Reception */}
        <div className="bg-green-50 border border-emerald-200 rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center">
              <Headset className="text-emerald-600 w-6 h-6" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Support</h3>
          <p className="text-gray-600">9802069647</p>
          <p className="text-gray-600">9802070274</p>
          <p className="text-gray-600">9802069649</p>

          <h3 className="text-lg font-semibold text-emerald-700 mt-6 mb-2">Reception</h3>
          <p className="text-gray-600">9802369643</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-12" />

      {/* Map + Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-96 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            loading="lazy"
          />
        </div>

        {/* Contact Form */}
        <form className="bg-green-50 border border-emerald-200 rounded-xl p-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" className="p-3 border border-gray-300 rounded-lg" placeholder="Your Name" />
            <input type="email" className="p-3 border border-gray-300 rounded-lg" placeholder="Your Email" />
          </div>

          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Subject" />

          <textarea className="w-full p-3 border border-gray-300 rounded-lg mb-4" rows={5} placeholder="Message" />

          <button
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
