import React, { useState, useRef } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUsPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const contactRef = useRef(null);

  const contactDetails = {
    India: {
      address: `Milaap Social Ventures India Pvt. Ltd. 
                Nextcoworks JP Nagar - Coworking Space`,
      email: "feedback@milaap.org",
      contact: "919916174848",
    },
    US: {
      address: "456, Elm Street, New York, NY, 10001",
      email: "contact.us@example.com",
      contact: "+1 (805) 590-7978",
    },
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="mt-40 p-6 sm:p-4  pb-20">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-rose-100 rounded-2xl shadow-2xl p-10 sm:p-6 mx-auto max-w-8xl">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-2xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg sm:text-base text-gray-700">
              We are here to help you and answer any questions you may have.
              Here is how to reach us!
            </p>

            {/* Country Selection Buttons */}
            <div className="flex gap-4 justify-center md:justify-start mt-4">
              {Object.keys(contactDetails).map((country) => (
                <button
                  key={country}
                  className={`px-6 py-2 font-semibold rounded-lg transition-all ${
                    selectedCountry === country
                      ? "bg-white text-pink-800 shadow-lg"
                      : "bg-white text-pink-800 text-pink-700 hover:bg-blue-700"
                  }`}
                  onClick={() => handleCountrySelection(country)}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="/images/istockphoto-1660570200-612x612.jpg"
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl rounded-lg"
            />
          </div>
        </div>

        {/* Display Contact Details */}
        {selectedCountry && (
          <div
            ref={contactRef}
            className="mt-6 p-6 sm:p-4 bg-rose-100 rounded-2xl shadow-lg mx-auto w-full transition-all duration-500 ease-in-out "
          >
            <h2 className="text-3xl sm:text-2xl font-bold flex justify-start gap-2 text-blue-700">
              <FaMapMarkerAlt className="text-red-600 flex-none text-3xl sm:text-3xl" />
              {selectedCountry}
            </h2>

            <p className="mt-5 text-lg sm:text-base text-gray-700 flex items-center gap-5">
              <FaPhoneAlt className="text-green-500 flex-none text-3xl sm:text-3xl" />
              <span>{contactDetails[selectedCountry].contact}</span>
            </p>

            <p className="mt-5 text-lg sm:text-base text-gray-700 flex items-center gap-5">
              <FaEnvelope className="text-blue-500 flex-none text-3xl sm:text-3xl" />
              <span>{contactDetails[selectedCountry].email}</span>
            </p>

            <p className="mt-5 text-lg sm:text-base text-gray-700 flex items-center gap-5">
              <FaMapMarkerAlt className="text-red-500 flex-none text-3xl sm:text-3xl" />
              <span>{contactDetails[selectedCountry].address}</span>
            </p>
          </div>
        )}
      </div>
      <div className="bottom-0 left-0 relative top-20 w-full z-50">
        <Footer />
      </div>
    </>
  );
};

export default ContactUsPage;
