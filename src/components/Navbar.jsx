import React from "react";
import { FaEnvelope, FaPlug, FaCode } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full text-white z-50">
      <div className="container mx-auto max-w-6xl py-4 pr-1 flex justify-end items-center relative">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-gray-900 bg-opacity-60 pb-4 md:px-4 pt-2 rounded-md">
          <a
            href="#home"
            className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
          >
            <IoMdHome className="text-xl md:text-2xl" />
          </a>
          <a
            href="#about"
            className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
          >
            <FaUserTie className="text-lg md:text-xl" />
          </a>
          <a
            href="#services"
            className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
          >
            <MdMiscellaneousServices className="text-xl md:text-2xl" />
          </a>
          <a
            href="#projects"
            className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
          >
            <FaCode className="text-xl md:text-2xl" />
          </a>
          <a
            href="#socials"
            className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
          >
            <FaPlug className="text-xl md:text-xl" />
          </a>
          <a
            href="#contact"
            className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="text-xl md:text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
