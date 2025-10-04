import React from "react";
import { FaEnvelope, FaPlug, FaCode, FaUserTie } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";

const Navbar = () => {
  // Navigation links data array
  const navLinks = [
    {
      name: "Home",
      href: "#home",
      icon: IoMdHome,
      size: "text-xl md:text-2xl",
    },
    {
      name: "About",
      href: "#about",
      icon: FaUserTie,
      size: "text-lg md:text-xl",
    },
    {
      name: "Services",
      href: "#services",
      icon: MdMiscellaneousServices,
      size: "text-xl md:text-2xl",
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FaCode,
      size: "text-xl md:text-2xl",
    },
    {
      name: "Socials",
      href: "#socials",
      icon: FaPlug,
      size: "text-xl md:text-xl",
    },
    {
      name: "Contact",
      href: "#contact",
      icon: FaEnvelope,
      size: "text-xl md:text-xl",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50">
      <div className="container mx-auto max-w-6xl py-4 pr-1 flex justify-end items-center relative">
        {/* Navigation Container */}
        <nav className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-nyuki-black/60 backdrop-blur-sm border border-nyuki-stripe/20 pb-4 md:px-4 pt-2 rounded-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="bg-nyuki-stripe/20 p-2 rounded-full hover:bg-nyuki-honey hover:text-nyuki-black transition-all duration-300 flex items-center justify-center"
              >
                <Icon className={link.size} />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
