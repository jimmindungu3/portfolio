import React, { useState } from "react";
import { FaHome, FaUserAlt, FaSuitcase, FaEnvelope } from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50">
      <div className="container mx-auto max-w-6xl p-4 flex justify-between items-center relative">
        {/* Navigation Icons (Desktop & Mobile) */}
        <div className="absolute top-4 right-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <a
            href="#home"
            className="text-white hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaHome size={30} />
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaUserAlt size={30} />
          </a>
          <a
            href="#projects"
            className="text-white hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaSuitcase size={30} />
          </a>
          <a
            href="#socials"
            className="text-white hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <MdOutlineSocialDistance size={30} />
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-400 hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900 text-white p-4 rounded-lg mt-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="text-white hover:text-purple-400 hover:underline transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-purple-400 hover:underline transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-white hover:text-purple-400 hover:underline transition-all duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-purple-400 hover:underline transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
