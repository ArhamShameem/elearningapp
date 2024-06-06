import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50 w-full bg-blue-50">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="text-xl border-2 border-blue-50 rounded-full p-2 flex justify-center items-center space-x-2">
        <img src="./src/assets/nest.png" alt="Nest" className="h-10 w-10" />
          <span className="bg-blue-100 rounded-full px-4 py-2">Knowledge</span>
          <span className="bg-blue-200 rounded-full px-4 py-2">Nest</span>
        </div>

        <div className="flex gap-2">
          <input
            placeholder="Search for courses"
            className="w-full border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button className="bg-blue-100 rounded-xl w-20">Search</button>
        </div>

        <nav className="flex space-x-4">
          <a href="/" className="text-black font-semibold hover:text-blue-500">
            Home
          </a>
          <Link to="/about">

          <a href="#" className="text-black font-semibold hover:text-blue-500">
            About
          </a>
          </Link>
          <Link to="/contact">
          <a href="#" className="text-black font-semibold hover:text-blue-500">
            Contact
          </a>
          </Link>
          <Link to="/login">
          <a href="#" className="text-black font-semibold hover:text-blue-500">
            Login
          </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
