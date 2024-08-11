import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../Asserts/SecureDapp.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent relative">
      <div className="  px-4 sm:px-6 lg:px-8  w-full">
        <div className="flex items-center justify-between h-16  w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0 text-white">
              <img src={Logo} alt="SecureDapp logo" className="h-16" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal"
                >
                  SecureWatch
                </Link>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal"
                >
                  Solidity Shield Scan
                </Link>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal"
                >
                  SecurePAD
                </Link>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-normal"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md bg-transparent text-white focus:bg-transparent focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Popover-like menu */}
      {isMenuOpen && (
        <div
          className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg py-2 px-3"
          style={{
            top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight,
          }}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="text-gray-800 block px-4 py-2 font-medium text-sm hover:bg-gray-200"
          >
            SecureWatch
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-gray-800 block px-4 py-2 font-medium text-sm hover:bg-gray-200"
          >
            Solidity Shield Scan
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-gray-800 block px-4 py-2 font-medium text-sm hover:bg-gray-200"
          >
            SecurePAD
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-gray-800 block px-4 py-2 font-medium text-sm hover:bg-gray-200"
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
