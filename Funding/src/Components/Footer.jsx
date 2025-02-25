import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8 mt-10 shadow-lg border-t-4 border-pink-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold font-serif text-pink-800">
              Fund Raiser
            </h2>
            <p className="text-gray-700 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-pink-700 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-700 transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-700 transition"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-pink-700 text-sm text-2xl font-bold">
            Small acts when multiplied by millions of people can transform the
            world
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div>
              <div className="text-pink-700 ms-6">
                {" "}
                <FaFacebookSquare />
              </div>
              <div className="text-gray-700">Facebook</div>
            </div>

            <div>
              <div className="text-pink-700 ms-6">
                {" "}
                <FaTwitter />
              </div>
              <div className="text-gray-700">Facebook</div>
            </div>

            <div>
              <div className="text-pink-700 ms-6">
                {" "}
                <FaLinkedin />
              </div>
              <div className="text-gray-700">Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
