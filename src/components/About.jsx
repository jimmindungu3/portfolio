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
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="about" className="w-full px-4 py-16 text-white">
      <div className="max-w-5xl mx-auto">
        <h2
          className="mb-8 text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div
          className="mb-10 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="mb-6 text-lg">
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

        <div className="mb-12">
          <h3
            className="mb-6 text-2xl font-bold text-center"
            data-aos="fade-up"
          >
            My Approach
          </h3>

          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/60 backdrop-blur">
              <h4 className="mb-3 text-xl font-semibold text-purple-400">
                Development Philosophy
              </h4>
              <p className="text-gray-300">
                I believe in writing clean, maintainable code and creating
                intuitive user experiences. My approach combines technical
                excellence with an understanding of user needs to build
                solutions that stand the test of time.
              </p>
            </div>

            <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/60 backdrop-blur">
              <h4 className="mb-3 text-xl font-semibold text-blue-400">
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

        <h3 className="mb-6 text-2xl font-bold text-center" data-aos="fade-up">
          Career Highlights
        </h3>

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div
            className="p-6 transition border border-gray-800 rounded-lg bg-gray-900/80 backdrop-blur hover:border-indigo-900/50 group"
            data-aos="fade-up"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-gray-800 rounded-full">
                <FaCode className="text-xl text-indigo-400" />
              </div>
              <span className="text-4xl font-bold text-white">4+</span>
            </div>
            <h3 className="mb-1 text-lg font-semibold tracking-wider text-gray-300 uppercase">
              Key Projects
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                From e-commerce to educational platforms
              </p>
              <FaArrowRight className="text-gray-600 transition group-hover:text-indigo-400" />
            </div>
          </div>

          <div
            className="p-6 transition border border-gray-800 rounded-lg bg-gray-900/80 backdrop-blur hover:border-indigo-900/50 group"
            data-aos="fade-up"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-gray-800 rounded-full">
                <FaGraduationCap className="text-xl text-purple-400" />
              </div>
              <span className="text-4xl font-bold text-white">3+</span>
            </div>
            <h3 className="mb-1 text-lg font-semibold tracking-wider text-gray-300 uppercase">
              Certificates
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Software engineering & TVET training
              </p>
              <FaArrowRight className="text-gray-600 transition group-hover:text-purple-400" />
            </div>
          </div>

          <div
            className="p-6 transition border border-gray-800 rounded-lg bg-gray-900/80 backdrop-blur hover:border-indigo-900/50 group"
            data-aos="fade-up"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-gray-800 rounded-full">
                <MdOutlineWorkHistory className="text-xl text-blue-400" />
              </div>
              <span className="text-4xl font-bold text-white">3+</span>
            </div>
            <h3 className="mb-1 text-lg font-semibold tracking-wider text-gray-300 uppercase">
              Years of experience
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Balancing development & teaching
              </p>
              <FaArrowRight className="text-gray-600 transition group-hover:text-blue-400" />
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="flex items-center gap-2 px-6 py-3 transition rounded-lg bg-indigo-600/80 hover:bg-indigo-700">
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
            className="flex items-center gap-2 px-6 py-3 transition border rounded-lg bg-purple-900/60 hover:bg-purple-900/80 border-purple-500/30"
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
