import React, { useEffect } from "react";
import {
  FaCode,
  FaCertificate,
  FaGlobeAmericas,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS CSS

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out", // easing function
      once: true, // run the animation only once
    });
  }, []);

  return (
    <section id="about" className="w-full min-h-screen py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Bio text */}
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-lg md:text-xl">
            Hello, I'm <span className="font-semibold">James Ndung'u</span> — a
            passionate full-stack developer based in Nairobi, Kenya. I
            specialize in{" "}
            <span className="text-[#61DAFB] font-semibold">React</span>,
            <span className="text-[#68A063] font-semibold"> Node.js</span>, and{" "}
            <span className="text-[#47A248] font-semibold">MongoDB</span>. I'm
            constantly improving my skills in building web applications.
            Currently, I am working as a TVET trainer and on several personal
            projects in e-commerce and education spaces. My goal is to continue
            pushing boundaries in tech.
          </p>
        </div>

        {/* Action buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="flex items-center gap-2 bg-indigo-600/80 hover:bg-indigo-700 transition px-6 py-3 rounded-lg">
            <a
              href="/James Resume.pdf"
              download
              className="flex items-center gap-2"
            >
              <FaFileAlt />
              <span>Download Resume</span>
            </a>
          </button>

          <a
            href="#projects"
            className="flex items-center gap-2 bg-purple-900/60 hover:bg-purple-900/80 border border-purple-500/30 transition px-6 py-3 rounded-lg"
          >
            <FaCode />
            <span>View Projects</span>
          </a>
        </div>

        {/* Stats cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* Projects card */}
          <div
            className="bg-gray-900/80 backdrop-blur rounded-lg p-6 border border-gray-800 hover:border-indigo-900/50 transition group"
            data-aos="fade-up"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-gray-800 p-3 rounded-full">
                <FaCode className="text-indigo-400 text-xl" />
              </div>
              <span className="text-4xl font-bold text-white">4</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-300 mb-1">
              Total Projects
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                E-commerce, booking app and more.
              </p>
              <FaArrowRight className="text-gray-600 group-hover:text-indigo-400 transition" />
            </div>
          </div>

          {/* Certificates card */}
          <div
            className="bg-gray-900/80 backdrop-blur rounded-lg p-6 border border-gray-800 hover:border-indigo-900/50 transition group"
            data-aos="fade-up"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-gray-800 p-3 rounded-full">
                <FaCertificate className="text-purple-400 text-xl" />
              </div>
              <span className="text-4xl font-bold text-white">3</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-300 mb-1">
              Certificates
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Software engineering certification | TVET training award.
              </p>
              <FaArrowRight className="text-gray-600 group-hover:text-purple-400 transition" />
            </div>
          </div>

          {/* Experience card */}
          <div
            className="bg-gray-900/80 backdrop-blur rounded-lg p-6 border border-gray-800 hover:border-indigo-900/50 transition group"
            data-aos="fade-up"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-gray-800 p-3 rounded-full">
                <BiSolidTimeFive className="text-blue-400 text-xl" />
              </div>
              <span className="text-4xl font-bold text-white">3</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-300 mb-1">
              Years of Experience
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Extensive learning and practical experience.
              </p>
              <FaArrowRight className="text-gray-600 group-hover:text-blue-400 transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
