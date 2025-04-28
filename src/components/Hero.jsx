import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation only triggers once
    });
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center py-16 px-4 md:py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        {/* Left Content */}
        <div
          className="flex flex-col items-center md:items-start max-w-xl text-center md:text-left"
          data-aos="fade-up" // Animation for left content
        >
          <button className="mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-semibold">
            🚀 Ready to Innovate
          </button>
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight text-white"
            data-aos="fade-left"
          >
            James Ndung'u <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Full Stack Developer
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              TVET Trainer
            </span>
          </h1>

          <p className="mt-4 text-gray-300" data-aos="fade-left">
            Building innovative, robust, and user-friendly digital solutions
            that bring ideas to life and drive business growth.
          </p>

          {/* Tech Tags */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                  data-aos="zoom-in" // Tech tags zoom-in animation
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-2 rounded-lg bg-black/40 backdrop-blur text-white border border-white/10 hover:bg-white/10 transition"
              data-aos="fade-up" // Buttons fade-up animation
            >
              Projects ↗
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg bg-black/40 backdrop-blur text-white border border-white/10 hover:bg-white/10 transition"
              data-aos="fade-up" // Buttons fade-up animation
            >
              Contact ✉
            </a>
          </div>

          {/* Socials */}
          <div className="mt-6 flex gap-6 justify-center md:justify-start text-white">
            <a
              href="https://github.com/jimmindungu3"
              target="_blank"
              className="hover:text-purple-400 transition"
              data-aos="fade-right"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jamesndunguthedev"
              target="_blank"
              className="hover:text-purple-400 transition"
              data-aos="fade-right"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="hidden md:flex w-full md:w-1/2 justify-center"
          data-aos="fade-left" // Image fade-left animation
        >
          <img
            src="/programming.svg"
            alt="Developer Illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
