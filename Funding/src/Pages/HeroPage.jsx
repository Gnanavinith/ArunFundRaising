import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

//--------------------Slides--------------------------
const slides = [
  "India's Most Affordable And 0% FEES FREE Fundings Plans Platform",
  "3 Easy Steps To Funding Your Fund In Efficient Way On This Platform ",
];

//------------------Reviews-------------------------
const reviews = [
  {
    name: "Ramesh Kumar",
    image:
      "/images/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confiden.avif",
    review:
      "This platform transformed my startup journey! The funding process was smooth, and the team was incredibly supportive. I secured the capital I needed to scale my business within weeks",
  },
  {
    name: "Suresh Sharma",
    image:
      "/images/young-indian-man-standing-isolated-grey-wall-approving-doing-positive-gesture-with-hand-thumbs-up-smiling-happy-success_231208-2602.avif",
    review:
      "As a first-time founder, finding investors was overwhelming. This website made the process easy, connecting me with the right people and providing valuable resources. Highly recommended!",
  },
  {
    name: "Anish Varma",
    image:
      "/images/handsome-handsome-guy-posing-against-white-wall_176420-32958.avif",
    review:
      "A game-changer for entrepreneurs! The transparency, quick approvals, and investor network helped me secure funding faster than I ever expected. Thank you for empowering startups",
  },
];

const HeroPage = () => {
  // -------------Usestates---------------
  const [currentSlide, setCurrentSlide] = useState(0);

  //-----------Data Getting and Error Handling UseState---------
  const [cartdata, setCartdata] = useState([]);
  const [error, setError] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // ------------Search UseState----------------
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  //----------Search User---------------
  const filterUsers = cartdata.filter((f) => f.companytype.toLowerCase().includes(query.toLowerCase())
  );

  // ----------------UseEffects--------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/carts");
      setCartdata(response.data);
      setError(null);
    } catch (error) {
      setError("Fetching data has encountered an error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // -----------------------Reviews Concept---------------------
  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="max-w-7xl mx-auto mt-30 md:mt-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <img
                className="w-full border border-7 border-pink-700 rounded-xl p-5 md:p-0"
                src="/images/istockphoto-1385970223-612x612.jpg"
                alt="Business Project"
              />
            </div>
            <div className="border bg-rose-100 border-pink-700 rounded-xl py-6 px-6 md:py-8 md:px-10 text-center">
              <h1 className="text-4xl md:text-6xl font-serif text-pink-800">
                Fund Raiser
              </h1>
              <h2 className="text-2xl md:text-4xl text-gray-700 mt-4">
                FEES <span className="text-pink-800">FREE</span> PLATFORM
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-10 gap-6">
                <div className="text-3xl md:text-5xl font-bold">
                  0%
                  <p className="text-pink-700 bg-white text-lg md:text-xl border rounded border-pink-800 border-4 border-l-9 px-2 py-1 mt-2">
                    Platform Fee
                  </p>
                </div>
                <div className="text-3xl md:text-5xl font-bold">
                  20Lakh+
                  <p className="text-pink-700 bg-white text-lg md:text-xl border border-4 border-l-9 rounded border-pink-800 px-2 py-1 mt-2">
                    Donors Fundraisers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border bg-rose-100 md:w-full rounded-xl border-pink-700 mt-12 py-4 px-4 text-center border-5">
          <div className="overflow-hidden bg-rose-100 mt-4 md:max-w-xl mx-auto relative border rounded-lg border-pink-700 p-3">
            <motion.div
              key={currentSlide}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-xl bg-white text-pink-700 md:text-2xl font-semibold bg-gray-100 p-4 rounded-lg shadow-md "
            >
              {slides[currentSlide]}
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white  text-lg md:text-xl font-bold w-48 border rounded-2xl bg-pink-700 mt-4 py-2 mx-auto"
          >
            Fund Rising
          </motion.div>
        </div>
        {/* -------------------------------------Funding Zone----------------------------------- */}
        <div className="max-w-7xl mx-auto mt-12 px-4">
          <h1 className="text-3xl md:text-5xl text-center font-bold">
            FUNDING ZONE
          </h1>
          <div className="text-center">
            ----------------------------------------
          </div>

          {/* --------------------------------------SearchBar------------------------------------------ */}

          <div className="relative w-full max-w-md mx-auto p-2 sm:p-4">
            {/* Search Input */}
            <div className="flex items-center border border-pink-700 rounded-lg overflow-hidden shadow-sm w-full max-w-lg mx-auto bg-white">
              <button className="p-2 sm:p-3" onClick={() => setOpen(!open)}>
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              </button>
              <input
                type="text"
                placeholder="Search Below Sectors"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 sm:p-3 focus:outline-none text-sm sm:text-base"
              />
              {query && (
                <button className="p-2 sm:p-3" onClick={() => setQuery("")}>
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-6">
            {filterUsers.map((cart) => (
              <div
                key={cart.id}
                className="border bg-rose-100 border-pink-700 p-5 rounded-xl"
              >
                <h1 className="text-2xl text-gray-700 font-semibold">
                  <span className="text-pink-700">{cart.title}</span>
                </h1>
                <img
                  className="my-4 border border-pink-700 w-full h-48 object-cover rounded-lg"
                  src={cart.image}
                  alt="Cart Image"
                />
                <div className="text-gray-700 text-lg leading-8">
                  {cart.about2}{" "}
                  <Link to = {`/cart/${cart._id}`}>
                    <span className="border border-pink-800 p-1 rounded-lg text-pink-800 bg-white">
                      View More
                    </span>
                  </Link>
                </div>
                <div className="mt-2 p-2">
                  <span className=" font-bold border rounded-lg border-2 border-pink-700 p-1 me-3">
                    Sectors
                  </span>{" "}
                  {cart.companytype}
                </div>
                <Link to={`/cart/${cart._id}`}>
                  <button className="border border-pink-700 border-4 rounded-lg p-2 mt-4 w-full text-lg font-semibold">
                    Start Funding
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* ---------------------------reveiws----------------------------- */}
          <div className="max-w-4xl bg-rose-100 mx-auto mt-10 px-4 text-center relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="border border-pink-700 p-6 rounded-lg shadow-lg bg-white flex flex-col items-center"
            >
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-40 h-40 p-2 rounded-full mb-4 border border-pink-700"
              />
              <h2 className="text-lg font-semibold text-pink-700">
                {reviews[currentIndex].name}
              </h2>
              <p className="text-gray-600 mt-2">
                {reviews[currentIndex].review}
              </p>
            </motion.div>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevReview}
                className="px-4 py-2 bg-pink-700 text-white rounded border border-pink-700"
              >
                Prev
              </button>
              <button
                onClick={nextReview}
                className="px-4 py-2 bg-pink-700 text-white rounded border border-pink-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HeroPage;
