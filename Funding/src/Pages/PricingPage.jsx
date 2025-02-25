import React, { useState, useRef } from "react";
import FundTax from "../Components/FundTax";
import FundingTips from "../Components/FundingTips";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PricingPage = () => {
  const [goal, setGoal] = useState(50000);
  const [calculatedGoal, setCalculatedGoal] = useState(null);

  // Create ref for the result div
  const resultRef = useRef(null);

  const handleCalculate = () => {
    const finalGoal = parseFloat(goal) + 232.27;
    setCalculatedGoal(finalGoal);

    // Scroll to the result section after calculation
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200); // Delay to ensure state update before scrolling
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 p-6 sm:p-10">
        {/* Container with same width */}
        <div className=" mx-auto max-w-8xl">
          {/* Pricing Section */}
          <div className="shadow-2xl bg-rose-100 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start text-left gap-6 sm:gap-8">
            {/* Image Section (Left Side) */}
            <div className="md:w-1/2 flex justify-center order-2 md:order-1">
              <img
                src="/images/istockphoto-2161777481-612x612.jpg"
                alt="Pricing"
                className="w-full sm:w-3/4 h-auto object-contain rounded-lg"
              />
            </div>

            {/* Content Section (Right Side) */}
            <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-center order-1 md:order-2 text-center md:text-left">
              <h1 className="text-3xl font-bold">Free Fund Raising For All!</h1>
              <h1 className="text-4xl text-gray-900 font-semibold mb-3 sm:mb-4 mt-3 sm:mt-5">
                <span className="text-6xl font-extrabold text-pink-700">
                  0%
                </span>{" "}
                Platform Fees
              </h1>
              <p className="text-lg text-black">
                Start your fundraising journey with no extra charges. Every
                penny goes directly to your cause!
              </p>

              {/* Call to Action */}
              <div className="mt-4 sm:mt-6 flex justify-center md:justify-start">
                <a className="bg-pink-700 text-white px-6 py-3 border border-white rounded-xl text-xl font-semibold shadow-md hover:bg-pink-600 transition-all duration-300 ease-in-out w-full md:w-auto text-center">
                  Start Fundraising
                </a>
              </div>
            </div>
          </div>

          <FundTax />

          {/* Fundraiser Goal Calculator Section */}
          <div className="mt-6 shadow-2xl bg-rose-100 p-6 sm:p-8 rounded-2xl w-full flex flex-col items-center text-gray-900">
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
              Fundraiser Goal Calculator
            </h1>
            <p className="text-xl mt-3 sm:mt-5 text-gray-800 text-center">
              Plan and achieve your fundraiser goal with ease
            </p>

            <div className="mt-6 w-full flex flex-col items-center">
              <h2 className="text-lg sm:text-2xl font-semibold">
                I want to raise
              </h2>
              <div className="mt-4 flex flex-col items-center">
                <input
                  type="number"
                  placeholder="Enter Your Amount"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="bg-gray-100 p-3 rounded-xl w-full sm:w-60 text-center text-lg sm:text-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <p className="text-2xl font-bold mt-4">₹{goal}</p>
              </div>

              {/* Progress Bar */}
              <input
                type="range"
                min="10000"
                max="100000"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full sm:w-60 mt-4 accent-rose-600"
              />

              <button
                onClick={handleCalculate}
                className="mt-5 px-10 py-3 bg-pink-700 text-white border-white text-white font-semibold rounded-xl text-lg sm:text-xl shadow-lg hover:bg-pink-600 transition duration-300 w-full sm:w-auto"
              >
                Calculate
              </button>
            </div>
          </div>

          {/* Result Section */}
          {calculatedGoal && (
            <div
              ref={resultRef} // Attach ref here
              className="mt-10 bg-white rounded-lg w-full shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6"
            >
              <div className="text-center w-full">
                <h3 className="text-2xl font-bold text-rose-700">
                  Consider setting a goal of approx.
                </h3>
                <p className="text-3xl mt-2 font-extrabold text-gray-900">
                  ₹{calculatedGoal.toFixed(2)}
                </p>
                <p className="text-sm mt-4 text-gray-600">
                  Disclaimer: This goal is an estimate where we assume you
                  receive 70% of the total funds from INR contributions.
                </p>
              </div>
              <div className="border-t-2 md:border-l-2 md:border-t-0 border-gray-300 pt-6 md:pt-0 md:pl-6 w-full">
                <h4 className="font-bold text-2xl text-rose-700">
                  See Breakup
                </h4>
                <p className="mt-2 font-semibold">
                  Want to raise (₹): <span className="font-bold">{goal}</span>
                </p>
                <p className="mt-2 font-semibold">
                  Our Platform fee (₹): <span className="font-bold">0</span>
                </p>
                <p className="mt-2 font-semibold">
                  Payment gateway charges (₹):{" "}
                  <span className="font-bold">232.27</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <FundingTips />
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
