import React from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#C2803D] text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="WellMake Logo" className="w-36 h-32 mb-4" />
            <div className="mt-2 text-lg font-baloo">
              <p className="mb-2">
                Adress : 9 Vivekanand Puram Bangarda, Indore, M.P.
              </p>
              <p className="mb-2">E-Mail : guptasprochemhouse@gmail.com</p>
              <p className="mb-2">Tel : 7773003300</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 font-baloo">EXPLORE</h3>
            <ul className="font-baloo">
              <li className="mb-2">
                <Link to="/" className="hover:underline text-xl">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:underline text-xl">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline text-xl">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/career" className="hover:underline text-xl">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 font-baloo">FOLLOW US</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/welmake_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/welmakeindia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=7773003300"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <MessageCircle size={24} />
              </a>
              <li className="mb-2">
                <Link to="/gwash" className="hover:underline text-xl">
                  G wash
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/dr7" className="hover:underline text-xl">
                  Dr.7
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center md:text-right">
          <div className="flex flex-col md:flex-row justify-end gap-4 font-baloo font-semibold text-lg">
            <span className="hover:underline">
              © Copyright welmake. All Rights Reserved
            </span>
            <span className="hidden md:inline text-xl font-baloo">|</span>
            <a
              href="https://devrazers1-1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Design & Developed by Devrazers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
