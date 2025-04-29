import React, { useEffect } from "react";
import {
  FaCode,
  FaCertificate,
  FaGraduationCap,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdOutlineWorkHistory } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="about" className="w-full py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Professional Journey */}
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-lg mb-6">
            My journey in tech began with a passion for solving problems through
            code. With 3+ years of hands-on experience, I've evolved from
            building simple websites to developing complex full-stack
            applications that deliver real-world value.
          </p>

          <p className="text-lg">
            As a TVET trainer, I'm committed to empowering the next generation
            of developers by sharing my knowledge and experience. I believe in
            the power of education to transform lives and communities, which is
            why I balance my development work with teaching.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h3
            className="text-2xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            My Approach
          </h3>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Development Philosophy */}
            <div className="bg-gray-900/60 backdrop-blur p-6 rounded-lg border border-gray-800">
              <h4 className="text-xl font-semibold mb-3 text-purple-400">
                Development Philosophy
              </h4>
              <p className="text-gray-300">
                I believe in writing clean, maintainable code and creating
                intuitive user experiences. My approach combines technical
                excellence with an understanding of user needs to build
                solutions that stand the test of time.
              </p>
            </div>

            {/* Teaching Approach */}
            <div className="bg-gray-900/60 backdrop-blur p-6 rounded-lg border border-gray-800">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">
                Teaching Approach
              </h4>
              <p className="text-gray-300">
                As an educator, I focus on practical, hands-on learning that
                prepares students for real-world challenges. I break down
                complex concepts into digestible modules while emphasizing
                industry best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Stats and achievements */}
        <h3 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">
          Career Highlights
        </h3>

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
              <span className="text-4xl font-bold text-white">4+</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-300 mb-1">
              Key Projects
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                From e-commerce to educational platforms
              </p>
              <FaArrowRight className="text-gray-600 group-hover:text-indigo-400 transition" />
            </div>
          </div>

          {/* Education card */}
          <div
            className="bg-gray-900/80 backdrop-blur rounded-lg p-6 border border-gray-800 hover:border-indigo-900/50 transition group"
            data-aos="fade-up"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-gray-800 p-3 rounded-full">
                <FaGraduationCap className="text-purple-400 text-xl" />
              </div>
              <span className="text-4xl font-bold text-white">3+</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-300 mb-1">
              Certificates
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Software engineering & TVET training
              </p>
              <FaArrowRight className="text-gray-600 group-hover:text-purple-400 transition" />
            </div>
          </div>

          {/* Work Experience card */}
          <div
            className="bg-gray-900/80 backdrop-blur rounded-lg p-6 border border-gray-800 hover:border-indigo-900/50 transition group"
            data-aos="fade-up"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-gray-800 p-3 rounded-full">
                <MdOutlineWorkHistory className="text-blue-400 text-xl" />
              </div>
              <span className="text-4xl font-bold text-white">3+</span>
            </div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-300 mb-1">
              Years of experience
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Balancing development & teaching
              </p>
              <FaArrowRight className="text-gray-600 group-hover:text-blue-400 transition" />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="flex items-center gap-2 bg-indigo-600/80 hover:bg-indigo-700 transition px-6 py-3 rounded-lg">
            <a
              href="/James Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaFileAlt />
              <span>View Resume</span>
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
      </div>
    </section>
  );
};

export default About;
