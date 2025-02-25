import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostStartup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    about1: "",
    about2: "",
    companytype: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:7000/api/carts", formData) // ✅ Sending correct data
      .then((result) => {
        console.log(result)
        navigate("/homepage")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-rose-100 p-6 mt-10">
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full border border-pink-700">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
            Donate Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-pink-300"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">About 1</label>
              <input
                type="text"
                name="about1"
                value={formData.about1}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-pink-300"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">About 2</label>
              <input
                type="text"
                name="about2"
                value={formData.about2}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-pink-300"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Company Type
              </label>
              <input
                type="text"
                name="companytype"
                value={formData.companytype}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-pink-300"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Amount</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-pink-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-700 text-white py-2 rounded-lg font-semibold hover:bg-pink-800 transition duration-300"
            >
              Start Funding
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostStartup;
