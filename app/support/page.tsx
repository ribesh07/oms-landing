"use client";

import { MapPin, Mail, Phone, Headset, Building } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-green-50 py-16 px-4 sm:px-10">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-emerald-600 mb-16">
        Contact Us
      </h2>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Address */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center">
              <MapPin className="text-emerald-600 w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Our Address</h3>
          <p className="">Teku, Kathmandu, Nepal</p>
        </div>

        {/* Email */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center">
              <Mail className="text-emerald-600 w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Email Us</h3>
            <a href="mailto:info@globaltech.com.np" className="hover:underline cursor-pointer">
                  info@globaltech.com.np
                </a>
        </div>

        {/* Call */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center">
              <Phone className="text-emerald-600 w-6 h-6" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Call Us</h3>
          <a href="tel:01-5329949" className="">01-5329949</a>
          <a href="tel:01-5329952" className="">01-5329952</a>
        </div>

        {/* Support & Reception */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center">
              <Headset className="text-emerald-600 w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-emerald-700 mb-2">Support</h3>
            <a href="tel:+9779802069647"  className="cursor-pointer">9802069647</a>
            <a href="tel:+9779802070274"  className="cursor-pointer">9802070274</a>
            <a href="tel:+9779802069649"  className="cursor-pointer">9802069649</a>

            <h3 className="text-lg font-semibold text-emerald-700 mt-6 mb-2">Reception</h3>
            <a href="tel:9802069649" className="cursor-pointer">9802369643</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-12" />

      {/* Map + Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
         <iframe 
         className="w-full h-full"
         src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7839.4214457923745!2d85.30452170548973!3d27.697483576616882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190669120b69%3A0xbf1f46ec49ad921e!2sCloud%20web%20based%20accounting%20erp%20software%20in%20nepal!5e0!3m2!1sen!2snp!4v1764920152365!5m2!1sen!2snp" 
           loading="lazy"
         
       />
        </div>

        {/* Contact Form */}
        <form className="bg-white border border-emerald-200 rounded-xl p-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-green-50 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-green-50 transition"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-green-50 transition"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-green-50 transition"
          />

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
