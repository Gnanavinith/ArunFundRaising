import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/homepage");
        } else {
          setPasswordError(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-700 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          {passwordError && (
            <span className="block text-red-600 text-sm text-center">
              Invalid Password
            </span>
          )}
          <button
            type="submit"
            className="w-full bg-pink-700 text-white p-3 rounded-lg font-semibold hover:bg-pink-800 transition"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
