import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";



const DonatePage = () => {
  //-----------Data Getting and Error Handling UseState---------
  const [cartdata, setCartdata] = useState([]);
  const [error, setError] = useState(null);

  //-----------Data Getting and Error Handling UseEffect---------
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

  
  // ------------Search UseState----------------
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  //----------Search User---------------
  const filterUsers = cartdata.filter((f) =>
    f.companytype.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="mt-40">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-center text-5xl font-bold">HERE START YOUR FUNDING</h1>


{/* --------------------------------------SearchBar------------------------------------------ */}

          <div className="relative w-full max-w-md mx-auto p-2 sm:p-4 mt-10">
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
                  <Link to={`/cart/${cart._id}`}>
                    <span className="border border-pink-800 p-1 rounded-lg text-pink-800 bg-white">
                      ViewMore
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonatePage;
