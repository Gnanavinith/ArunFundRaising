import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import FontAwesome close icon

const FundingTips = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="shadow-2xl mt-5 bg-rose-100 p-6 sm:p-8 rounded-2xl w-full relative">
      <div className="p-10 text-center w-full mx-auto">
        <h1 className="lg:text-3xl sm:text-2xl font-bold mb-6 text-gray-800">
          Proceed Funding
        </h1>
        <p>Fill out the form below to proceed with the funding process!</p>

        {/* Button to Open Form */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <button
            className="bg-white text-pink-700 border border-pink-700 px-6 py-3 rounded-lg font-semibold transition-all"
            onClick={() => setIsFormOpen(true)}
          >
            Start Your Funding
          </button>
        </div>
      </div>

      {isFormOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0  bg-opacity-50 backdrop-blur-md z-40"
            onClick={() => setIsFormOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 min-h-screen px-4">
            <div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-sm 
                            h-auto max-h-full overflow-hidden py-6 relative"
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-4 text-gray-500 hover:text-red-600 transition-all"
                onClick={() => setIsFormOpen(false)}
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
                I am raising funds for a/an StartUp
              </h2>

              <form className="space-y-3">
                <div>
                  <label className="block text-gray-700 font-semibold">
                    INR : Estimated Cost
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter estimated cost"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter contact number"
                  />
                </div>

                {/* Continue Button */}
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white border border-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  onClick={() => setIsFormOpen(false)}
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FundingTips;
