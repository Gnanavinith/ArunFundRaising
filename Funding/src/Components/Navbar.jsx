import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 shadow-lg border border-pink-700 border-2 bg-white">
      <div className="max-w-[1200px] mx-auto container flex justify-between items-center ">
        <Link to="/">
          <h1 className="text-xl font-bold font-serif text-pink-700 ">
            FUND RISIER
          </h1>
        </Link>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full bg-pink-700 md:w-auto transition-all border rounded-lg border-white ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/homepage"
              className="block md:inline-block text-white p-4 me-10 hover:bg-pink-600 "
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/overallcarts"
              className="block md:inline-block text-white p-4 me-10 hover:bg-pink-600 "
            >
              FUNDING
            </Link>
          </li>
          <li>
            <Link
              to="/Pricing"
              className="block md:inline-block text-white p-4 me-10 hover:bg-pink-600 "
            >
              PRICING
            </Link>
          </li>
          <li>
            <Link
              to="/Contactus"
              className="block md:inline-block text-white p-4 hover:bg-pink-600 "
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              to="/poststartup"
              className="block md:inline-block bg-white text-pink-700 p-4 font-bold border border-1 border-red-400"
            >
              I WANT POST MY STARTUP
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
