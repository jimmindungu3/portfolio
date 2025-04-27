import React from "react";
import { FaHome, FaUserAlt, FaSuitcase, FaEnvelope } from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full text-white z-50">
      <div className="container mx-auto max-w-6xl p-4 flex justify-end items-center relative">
        {/* Navigation Icons */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <a href="#home" className="text-white hover:text-blue-400 transition-all duration-300">
            <FaHome className="text-2xl md:text-3xl" />
          </a>
          <a href="#about" className="text-white hover:text-blue-400 transition-all duration-300">
            <FaUserAlt className="text-2xl md:text-3xl" />
          </a>
          <a href="#projects" className="text-white hover:text-blue-400 transition-all duration-300">
            <FaSuitcase className="text-2xl md:text-3xl" />
          </a>
          <a href="#socials" className="text-white hover:text-blue-400 transition-all duration-300">
            <MdOutlineSocialDistance className="text-2xl md:text-3xl" />
          </a>
          <a href="#contact" className="text-white hover:text-blue-400 transition-all duration-300">
            <FaEnvelope className="text-2xl md:text-3xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
