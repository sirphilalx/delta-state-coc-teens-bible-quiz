import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-5 py-5 sm:px-20 border bg-white">
        <div className="">
          <img
            className="w-20"
            src="src/assets/images/dstbqLogo.png"
            alt="logo"
          />
        </div>
        <div className="hidden sm:block">
          {/* Display regular nav items on larger screens */}
          <div className="nav flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/questions">Questions</Link>
          </div>
        </div>
        <div className="sm:hidden">
          {/* Display hamburger menu on smaller screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-block text-4xl text-gray-800 focus:outline-none"
          >
            &#8801; {/* Unicode for hamburger icon */}
          </button>
        </div>
        <div className="hidden sm:block">
          <button className="px-6 py-2 border rounded hover:bg-blue-50 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white">
            <Link to="/signIn">Sign In</Link>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col justify-center">
          <div className="flex flex-col justify-center gap-2 px-4 py-4 mx-2 border shadow rounded">
            <Link to="/" className="py-2 hover:bg-gray-50 flex justify-center">
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 hover:bg-gray-50 flex justify-center"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-2 hover:bg-gray-50 flex justify-center"
            >
              Contact
            </Link>
            <Link
              to="/questions"
              className="py-2 hover:bg-gray-50 flex justify-center"
            >
              Questions
            </Link>
            <div className="sm:block border-t w-full flex justify-center mt-4">
              <button className="w-full py-3 border rounded hover:bg-blue-50 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white">
                <Link to="/signIn">Sign In</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
