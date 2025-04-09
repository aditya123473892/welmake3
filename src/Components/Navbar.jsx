import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {Car, Link} from 'lucide-react';
import {NavLink, Outlet } from "react-router-dom";

const WellMakeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <nav
        className={`w-full relative transition-all duration-300 ${
          scrolled
            ? "bg-yellow-400 shadow-lg"
            : "bg-gradient-to-r from-yellow-300 to-yellow-200"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-6">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-blue-800 transition-transform duration-300 transform hover:scale-110 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/contact"
              className="text-blue-800 text-lg font-baloo font-bold tracking-wide hover:text-blue-600 transition-colors duration-300 relative group"
            >
              <span>Contact us</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              {/* Pop-up effect */}
              <div className="flex items-center justify-center absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 px-6 py-3 bg-white text-blue-800 text-sm font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48">
                Get in touch with us!
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className="text-blue-800 font-bold font-baloo text-lg tracking-wide hover:text-blue-600 transition-colors duration-300 relative group"
            >
              <span>About us</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              {/* Pop-up effect */}
              <div className="flex items-center justify-center absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 px-6 py-3 bg-white text-blue-800 text-sm font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48">
                Learn more about us!
              </div>
            </NavLink>
            <NavLink
              to="/career"
              className="text-blue-800 font-bold font-baloo text-lg tracking-wide hover:text-blue-600 transition-colors duration-300 relative group"
            >
              <span>Career</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              {/* Pop-up effect */}
              <div className="flex items-center justify-center absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 px-6 py-3 bg-white text-blue-800 text-sm font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48">
                Join our team!
              </div>
            </NavLink>
            <NavLink
              to="/gwash"
              className="text-blue-800 font-bold font-baloo text-lg tracking-wide hover:text-blue-600 transition-colors duration-300 relative group"
            >
              <span>G wash</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              {/* Pop-up effect */}
              <div className="flex items-center justify-center absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 px-6 py-3 bg-white text-blue-800 text-sm font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48">
                Explore G Wash!
              </div>
            </NavLink>
            <NavLink
              to="/dr7"
              className="text-blue-800 font-bold font-baloo text-lg tracking-wide hover:text-blue-600 transition-colors duration-300 relative group"
            >
              <span>Dr. 7</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              {/* Pop-up effect */}
              <div className=" flex items-center justify-center absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 px-6 py-3 bg-white text-blue-800 text-sm font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48">
                Discover Dr. 7!
              </div>
            </NavLink>
          </div>

          {/* Right button (hidden on smallest screens) */}
          <div className="hidden sm:block">
            <a
              href="https://api.whatsapp.com/send/?phone=7773003300&text&type=phone_number&app_absent=0"
              className="bg-white text-blue-800  py-2 px-6 font-baloo font-bold rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Mobile menu with transition */}
        <div
          className={`md:hidden absolute w-full bg-yellow-300 shadow-md z-10 transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            <NavLink
              to="/contact"
              className="block text-blue-800 font-bold text-lg py-2 pl-2 border-l-2 border-transparent hover:border-blue-800 hover:text-blue-600 transition-all duration-300"
            >
              Contact us
            </NavLink>
            <NavLink
              to="/about"
              className="block text-blue-800 font-bold text-lg py-2 pl-2 border-l-2 border-transparent hover:border-blue-800 hover:text-blue-600 transition-all duration-300"
            >
              About us
            </NavLink>
            <NavLink
              to="/career"
              className="block text-blue-800 font-bold text-lg py-2 pl-2 border-l-2 border-transparent hover:border-blue-800 hover:text-blue-600 transition-all duration-300"
            >
              Career
            </NavLink>
            <NavLink
              to="/gwash"
              className="block text-blue-800 font-bold text-lg py-2 pl-2 border-l-2 border-transparent hover:border-blue-800 hover:text-blue-600 transition-all duration-300"
            >
             G wash
            </NavLink>
            <NavLink
              to="/dr7"
              className="block text-blue-800 font-bold text-lg py-2 pl-2 border-l-2 border-transparent hover:border-blue-800 hover:text-blue-600 transition-all duration-300"
            >
              Dr. 7
            </NavLink>


  
            <a
              href="https://api.whatsapp.com/send/?phone=7773003300&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-800 font-bold text-lg py-2 pl-2 border-l-2 border-transparent hover:border-blue-800 hover:text-blue-600 transition-all duration-300"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
      </nav>

      {/* Logo positioned to overlap navbar and content below */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="rounded-full bg-white p-1 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="rounded-full border-4 border-blue-600 overflow-hidden sm:w-24 sm:h-24 w-16 h-16">
            <NavLink to="/">
              {" "}
              <img
                src={logo}
                alt="WellMake Logo"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default WellMakeNavbar;
