"use client";
import { useState } from "react";
//import { ChevronDown } from 'lucide-react';
import Image from "next/image";

export default function HeaderBar() {
  //const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center mr-2 border-[#01403e]">
            <div className="flex items-center gap-2">
              <Image
                src="/globaltech-logo.png"
                alt="Global Tech"
                width={45}
                height={45}
                className="w-35 h-35 object-contain contrast-150 transition-all duration-300 
                          hover:scale-105 hover:contrast-200"
              />
            </div>
          </div>


          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <a
              href="http://omslite.globaltech.com.np/Account/Document"
              className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium transition-colors"
            >
              DOCS
            </a>

            <a
              href="http://omslite.globaltech.com.np/Account/Feature"
              className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium transition-colors"
            >
              FEATURES
            </a>
            <a
              href="http://omslite.globaltech.com.np/Account/Pricing"
              className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium transition-colors"
            >
              PRICING
            </a>
            <a
              href="http://omslite.globaltech.com.np/Account/Support"
              className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium transition-colors"
            >
              SUPPORT
            </a>
            <a
              href="#"
              className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium transition-colors"
            >
              BLOGS
            </a>
            <a
              href="#"
              className="text-gray-700 rounded-lg  hover:text-white hover:bg-[#01403e] p-4 font-medium transition-colors"
            >
              HELP
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-6 py-2 bg-[#01403e] text-white font-medium rounded-lg  transition-all duration-300 
                          hover:scale-105 ">
              Start Free Trial
            </button>
            <a 
            href= "http://omslite.globaltech.com.np/Account/Login"
            className="px-6 py-2 border-2 border-[#01403e] text-green-600 font-medium m-3 rounded-lg hover:bg-[#01403e] hover:text-white transition-colors">
              Login
              
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
