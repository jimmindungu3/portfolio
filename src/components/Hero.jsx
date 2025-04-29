import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaCode, FaFileAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center py-16 px-4 md:py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
          data-aos="fade-up"
        >
          {/* Let's Build Button */}
          <p className="mb-4 text-2xl">👋 🌍</p>

          {/* Name */}
          <h1
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            data-aos="fade-left"
          >
            I'm James Ndung'u
          </h1>

          {/* Image - Small Screens */}
          <div
            className="flex w-3/4 justify-center mt-4 mb-4 lg:hidden"
            data-aos="fade-up"
          >
            <img
              src="/james.png"
              alt="James photo"
              className="w-3/4 max-w-xs rounded-full border border-gray-700"
            />
          </div>

          {/* Titles */}
          <div className="mb-4">
            <h2
              className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2"
              data-aos="fade-left"
            >
              Full Stack Web Developer &
            </h2>
            <h2
              className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              data-aos="fade-left"
            >
              TVET Trainer
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6" data-aos="fade-left">
            I build innovative, robust, and user-friendly digital solutions that
            drive business growth.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                  data-aos="zoom-in"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Action Buttons - UPDATED WITH CONSISTENT STYLING */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
            {/* Contact Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition px-6 py-3 rounded-lg text-white"
              data-aos="fade-up"
            ><span><MdContactPhone /></span>
              <span>Contact</span>
            </a>
            
            {/* Resume Button */}
            <a
              href="/James Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg text-white"
              data-aos="fade-up"
            >
              <FaFileAlt />
              <span>View Resume</span>
            </a>

            
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center lg:justify-start text-white">
            <a
              href="https://github.com/jimmindungu3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              data-aos="fade-right"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jamesndunguthedev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              data-aos="fade-right"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Image - Large Screens */}
        <div
          className="hidden lg:flex w-full lg:w-1/2 justify-center"
          data-aos="fade-left"
        >
          <img
            src="/james.png"
            alt="Developer Illustration"
            className="w-3/4 max-w-md rounded-full border border-gray-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;