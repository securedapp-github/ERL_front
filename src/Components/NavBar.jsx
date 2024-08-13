import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../Asserts/Logo.png";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

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
    <nav className="bg-[#021317] relative px-6 py-8">
      <div className="  px-4 sm:px-6 lg:px-8  w-full">
        <div className="flex items-center justify-between h-16  w-full ">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0 text-white md:ml-16 ">
              <img src={Logo} alt="SecureDapp logo" className="h-16" />
            </div>

            <div className="hidden md:flex gap-3 justify-center items-center flex-wrap ">
              <p className="text-white">About Us</p>
              <div className="w-[2px] h-4 bg-white"></div>
              <p className="text-white">Contact Us</p>
              <div className="w-[2px] h-4 bg-white"></div>
              <p className="text-white">Lite Paper</p>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex gap-7">
                  <a href="#">
                    <div className="border bottom-2 border-white p-2 rounded-full">
                      <PiTelegramLogoDuotone className="text-white text-xl" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="border bottom-2 border-white p-2 rounded-full">
                      <BsTwitterX className="text-white text-lg" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="border bottom-2 border-white p-2 rounded-full">
                      <FaDiscord className="text-white text-xl" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="border bottom-2 border-white p-2 rounded-full">
                      <FaFacebookF className="text-white text-xl" />
                    </div>
                  </a>
                </div>
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
          className="absolute right-0 mt-2 bg-black border border-gray-300 rounded-md shadow-lg py-2 px-3"
          style={{
            top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight,
          }}
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="text-white block px-4 py-2 font-medium text-sm hover:bg-gray-200"
          >
            About Us
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-white block px-4 py-2 font-medium text-sm hover:bg-gray-200"
          >
            Contact Us
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-white block px-4 py-2 font-medium text-sm hover:bg-gray-200"
          >
            Lite Paper
          </Link>

          <div className=" flex items-baseline space-x-4 mt-4">
            <div className="flex gap-7">
              <a href="#">
                <div className="border bottom-2 border-white p-2 rounded-full">
                  <PiTelegramLogoDuotone className="text-white text-xl" />
                </div>
              </a>
              <a href="#">
                <div className="border bottom-2 border-white p-2 rounded-full">
                  <BsTwitterX className="text-white text-lg" />
                </div>
              </a>
              <a href="#">
                <div className="border bottom-2 border-white p-2 rounded-full">
                  <FaDiscord className="text-white text-xl" />
                </div>
              </a>
              <a href="#">
                <div className="border bottom-2 border-white p-2 rounded-full">
                  <FaFacebookF className="text-white text-xl" />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
