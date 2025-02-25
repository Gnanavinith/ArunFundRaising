import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-700 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="w-full bg-pink-700 text-white p-3 rounded-lg font-semibold hover:bg-pink-800 transition"
          >
            SIGN UP
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/login">
            <button className="w-full mt-2 bg-gray-300 text-gray-800 p-3 rounded-lg hover:bg-gray-400 transition">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
