import React from "react";
import { FaBell, FaUser } from "react-icons/fa";
import logo from "../assets/Rectangle 112.png";

const Navbar = () => (
  <header className="flex items-center justify-between bg-white px-4 py-2 shadow-md sm:px-6">
    <img src={logo} alt="Logo" className="h-10 sm:h-12" />

    <div className="hidden md:flex items-center space-x-4">
      <FaBell className="text-gray-600 text-lg mr-2" />
      <div className="flex items-center space-x-3">
        <FaUser className="text-gray-600 text-lg" />
        <span className="font-medium text-blue-500 text-sm sm:text-base">
          Starc | Head Coach
        </span>
      </div>
    </div>
  </header>
);

export default Navbar;
