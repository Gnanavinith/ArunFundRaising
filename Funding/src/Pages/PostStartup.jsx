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
    companytype: "",
    amount: "",
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("about1", formData.about1);
    data.append("companytype", formData.companytype);
    data.append("amount", formData.amount);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:7000/api/carts", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccessMessage("Your record has been submitted successfully!");
      setTimeout(() => {
        navigate("/homepage");
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-rose-100 p-6 mt-20">
        <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
            Launch Your Startup Journey
          </h2>
          {successMessage && (
            <p className="text-green-600 text-center font-medium mb-4">
              {successMessage}
            </p>
          )}
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
              <label className="block text-gray-700 font-medium">About</label>
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
              <label className="block text-gray-700 font-medium">Company Type</label>
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
            <div>
              <label className="block text-gray-700 font-medium">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-pink-300 bg-white file:border-none file:rounded-lg file:px-4 file:py-2 file:bg-pink-700 file:text-white file:cursor-pointer hover:file:bg-pink-800 transition duration-300"
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
