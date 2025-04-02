import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Distributors from "../Components/Distributors";
function Contactus() {
  const [state, handleSubmit] = useForm("xbjnojvj");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>

            {state.succeeded ? (
              <div className="p-4 bg-green-100 rounded-md text-green-700">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center px-4 py-2 text-white bg-[#005486] rounded-md hover:bg-blue-700 transition disabled:opacity-75"
                >
                  <FaPaperPlane className="mr-2" />
                  {state.submitting ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <span className="text-gray-800">
                  9 Vivekanand Puram, Indore, M.P.
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=9+Vivekanand+Puram+Bangarda,+Indore,+Madhya+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 ml-2 underline"
                  >
                    Get Directions
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-2" />
                <span className="text-gray-800">+91 7773003300</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-2" />
                <span className="text-gray-800">
                  guptasprochemhouse@gmail.com
                </span>
              </div>
              <div className="flex items-start">
                <FaClock className="text-blue-600 mt-1" />
                <div className="ml-3">
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg mt-8 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h2>
          <div className="w-full h-72 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.576138273017!2d75.857727!3d22.719568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcfc70f3b4a5%3A0x5f0b4a2a4b0f5e2!2s9%20Vivekanand%20Puram%20Bangarda%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1711900000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
          <Distributors/>
      <Footer />
    </div>
  );
}

export default Contactus;