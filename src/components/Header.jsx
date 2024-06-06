import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50 w-full bg-blue-50">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
      <div className="text-xl border-2 border-blue-50 rounded-full inline-flex items-center p-2">
  <span className="bg-blue-100 rounded-full px-3 py-1">Knowledge</span>
  <span className="bg-blue-200 rounded-full px-3 py-1 ml-2">Nest</span>
</div>

        <div className="flex gap-2">
          <input
            placeholder="Search for courses"
            className="w-full border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button className="bg-blue-100 rounded-xl w-20">search</button>{" "}
        </div>

        <nav className="flex space-x-4">
          <a href="#" className="text-black font-semibold hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-black font-semibold hover:text-blue-500">
            About
          </a>
          <a href="#" className="text-black font-semibold hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
