import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom"; // Import Link for routing

import logo from "../assets/image/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-[#FFFFFF] text-black sticky top-0 shadow-md shadow-[#ff9422d3]"
      style={{ zIndex: "40" }}
    >
      <div className="container mx-auto px-4 py-2 sm:py-1 flex justify-between items-center lg:px-14 ">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 sm:h-14 w-auto sm:w-auto mr-4"
            />
          </Link>
        </div>
        <div
          className="hidden md:flex space-x-4 sm:space-x-14 "
          style={{
            fontFamily: "Gilroy",
          }}
        >
          <Link
            to="/"
            className="text-md font-extrabold text-black hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-md font-extrabold text-black hover:text-orange-400"
          >
            About Us
          </Link>
          <Link
            // to="/pricingsection"
            to="/study-germany"
            className="text-md font-extrabold text-black hover:text-orange-400"
          >
            Services
          </Link>
          <Link
            to="/chancekart"
            className="text-md font-extrabold text-black hover:text-orange-400"
          >
            ChanceKart
          </Link>
          <Link
            to="/contact"
            className="text-md font-extrabold text-black hover:text-orange-400"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes
              onClick={toggleMenu}
              className="text-black text-xl sm:text-2xl"
            />
          ) : (
            <div className="flex space-x-4">
              <a href={`tel:+917276440061`}>
                <IoIosCall className="text-black text-xl sm:text-2xl" />
              </a>

              <FaBars
                onClick={toggleMenu}
                className="text-black text-xl sm:text-2xl"
              />
            </div>
          )}
        </div>
      </div>
      {/* Responsive Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white py-2"
          style={{ fontFamily: "ZonaPro-Bold" }}
        >
          <Link
            to="/"
            className="block px-4 py-2 text-sm hover:text-orange-300"
            onClick={toggleMenu} // Close menu on click
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-sm hover:text-orange-300"
            onClick={toggleMenu} // Close menu on click
          >
            About Us
          </Link>
          <Link
            // to="/pricingsection"
            to="/study-germany"
            className="block px-4 py-2 text-sm hover:text-orange-300"
            onClick={toggleMenu} // Close menu on click
          >
            Services
          </Link>
          <Link
            to="/chancekart"
            className="block px-4 py-2 text-sm hover:text-orange-300"
            onClick={toggleMenu} // Close menu on click
          >
            ChanceKart
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-sm hover:text-orange-300"
            onClick={toggleMenu} // Close menu on click
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
