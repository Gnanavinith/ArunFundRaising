import React from "react";

const FundTax = () => {
  return (
    <div className="mt-5 shadow-2xl bg-rose-100 p-6 sm:p-8 rounded-2xl w-full items-center text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-4">Fund Raiser</h1>
      <h2 className="text-xl  text-center text-gray-700 mb-6">
        Start your journey with zero platform fees
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 items-center mt-10">
        {/* Left Column */}
        <div className="p-4 rounded-2xl bg-white shadow-md text-center md:text-start lg:text-start">
          <h1 className="text-xl font-semibold text-rose-700">
            Minimum Deposit
          </h1>
          <p className="text-lg font-bold">₹10,000</p>

          <h1 className="text-xl font-semibold mt-4 text-rose-700">
            Payment Taxes
          </h1>
          <p className="text-gray-600">
            Our website does not charge any payment taxes.
          </p>

          <h1 className="text-xl font-semibold mt-4 text-rose-700">
            Payment Gateway
          </h1>
          <p className="text-gray-600 font-bold">₹232.27</p>
        </div>

        {/* Right Column */}
        <div className="p-4 rounded-2xl bg-white shadow-md text-center md:text-start lg:text-start">
          <h1 className="text-xl font-semibold text-rose-700">
            Maximum Deposit
          </h1>
          <p className="text-lg font-bold">₹1,00,000</p>

          <h1 className="text-xl font-semibold mt-4 text-rose-700">
            Payment Taxes
          </h1>
          <p className="text-gray-600">
            Our website does not charge any payment taxes.
          </p>

          <h1 className="text-xl font-semibold mt-4 text-rose-700">
            Payment Gateway
          </h1>
          <p className="text-gray-600 font-bold">₹232.27</p>
        </div>

        {/* Button Column */}
        <div className="flex justify-center items-center">
          <button className="bg-pink-700 text-white border border-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-pink-600 transition-all duration-300">
            I Want to Fundraise
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundTax;
