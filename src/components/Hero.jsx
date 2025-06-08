import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
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
      className="flex items-center justify-center w-full min-h-screen px-4 py-16 md:py-24 lg:py-32"
    >
      <div className="container flex flex-col items-center justify-between max-w-6xl gap-8 px-4 mx-auto lg:flex-row">
        <div
          className="flex flex-col items-center max-w-2xl text-center lg:items-start lg:text-left"
          data-aos="fade-up"
        >
          <p className="mb-4 text-2xl">👋 🌍</p>

          <h1
            className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl"
            data-aos="fade-left"
          >
            I'm James Ndung'u
          </h1>

          <div
            className="flex justify-center w-3/4 mt-4 mb-4 lg:hidden"
            data-aos="fade-up"
          >
            <img
              src="/james.png"
              alt="James photo"
              className="w-3/4 max-w-xs border border-gray-700 rounded-full"
            />
          </div>

          <div className="mb-4">
            <h2
              className="mb-2 text-2xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              data-aos="fade-left"
            >
              Full Stack Web Developer &
            </h2>
            <h2
              className="text-2xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              data-aos="fade-left"
            >
              TVET Trainer
            </h2>
          </div>

          <p className="mb-6 text-gray-300" data-aos="fade-left">
            I design and develop scalable web applications using modern
            JavaScript and Python frameworks. From responsive UIs to robust
            backends and APIs, I create solutions that help businesses grow and
            individuals learn.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6 lg:justify-start">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-sm text-gray-300 bg-gray-800 rounded-full"
                  data-aos="zoom-in"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 lg:justify-start">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 text-white transition rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              data-aos="fade-up"
            >
              <span>
                <MdContactPhone />
              </span>
              <span>Contact</span>
            </a>

            <a
              href="/James Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
              data-aos="fade-up"
            >
              <FaFileAlt />
              <span>View Resume</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 text-white lg:justify-start">
            <a
              href="https://github.com/jimmindungu3"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-purple-400"
              data-aos="fade-right"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jamesndunguthedev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-purple-400"
              data-aos="fade-right"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div
          className="justify-center hidden w-full lg:flex lg:w-1/2"
          data-aos="fade-left"
        >
          <img
            src="/james.png"
            alt="Developer Illustration"
            className="w-3/4 max-w-md border border-gray-700 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
