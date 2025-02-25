import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";

const DonatePage = () => {
  const [cartdata, setCartdata] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/carts");
        setCartdata(response.data);
        setError(null);
      } catch (error) {
        setError("Fetching data has encountered an error");
      }
    };
    fetchdata();
  }, []);

  // Filter based on user input
  const filterUsers = cartdata.filter((f) =>
    f.companytype?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="mt-40">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-center text-5xl font-bold">
            HERE START YOUR FUNDING
          </h1>

          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto p-2 sm:p-4 mt-10">
            <div className="flex items-center border border-pink-700 rounded-lg overflow-hidden shadow-sm w-full max-w-lg mx-auto bg-white">
              <button className="p-2 sm:p-3">
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

          {/* Display Filtered Startups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 p-6">
            {filterUsers.map((cart) => (
              <div
                key={cart.id}
                className="bg-rose-100  p-6 rounded-2xl hover:shadow-2xl transition-transform transform hover:scale-105 backdrop-blur-lg shadow-2xl"
              >
                <h1 className="text-2xl text-gray-800 font-bold text-center">
                  <span className="text-rose-800 text-3xl">{cart.title}</span>
                </h1>
          
                <img
                  className="my-4  w-full h-52 object-cover rounded-xl"
                  src={cart.image}
                  alt={cart.title}
                />
          
                <div className="text-gray-700 text-lg text-center px-4 leading-7 mt-5">
                  {cart.about2}{" "}
                  <Link to={`/cart/${cart._id}`} className="inline-block">
                    <span className="p-3 rounded-lg text-pink-800 bg-white hover:bg-pink-700 hover:text-white transition duration-300">
                      View More
                    </span>
                  </Link>
                </div>
          
                <div className="mt-5 flex items-center justify-center gap-2">
                 
                  <span className="text-gray-800 text-2xl ">{cart.companytype}</span>
                </div>
          
                <Link to={`/cart/${cart._id}`}>
                  <button className="mt-5 w-full py-3 rounded-xl text-lg font-semibold text-pink-700 bg-white hover:bg-pink-700 hover:text-white transition duration-300 shadow-md hover:shadow-lg">
                    Start Funding
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonatePage;
