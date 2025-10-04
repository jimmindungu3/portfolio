import React, { useEffect } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Initialize animations when component loads
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Career highlights data
  const highlights = [
    {
      icon: FaCode,
      number: "4+",
      title: "Key Projects",
      description: "From e-commerce to educational platforms",
      iconColor: "text-nyuki-gold",
      hoverColor: "hover:border-nyuki-honey/50",
      arrowHover: "group-hover:text-nyuki-gold",
    },
    {
      icon: FaGraduationCap,
      number: "3+",
      title: "Certificates",
      description: "Software engineering & TVET training",
      iconColor: "text-nyuki-honey",
      hoverColor: "hover:border-nyuki-gold/50",
      arrowHover: "group-hover:text-nyuki-honey",
    },
    {
      icon: MdOutlineWorkHistory,
      number: "3+",
      title: "Years of experience",
      description: "Balancing development & teaching",
      iconColor: "text-nyuki-stripe",
      hoverColor: "hover:border-nyuki-stripe/50",
      arrowHover: "group-hover:text-nyuki-stripe",
    },
  ];

  return (
    <section id="about" className="w-full px-4 py-16 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2
          className="mb-8 text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-nyuki-honey to-nyuki-gold"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Introduction */}
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

        {/* My Approach Section */}
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
            {/* Development Philosophy */}
            <div className="p-6 border border-nyuki-stripe/30 rounded-lg bg-nyuki-black/60 backdrop-blur">
              <h4 className="mb-3 text-xl font-semibold text-nyuki-gold">
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
            <div className="p-6 border border-nyuki-stripe/30 rounded-lg bg-nyuki-black/60 backdrop-blur">
              <h4 className="mb-3 text-xl font-semibold text-nyuki-honey">
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

        {/* Career Highlights Section */}
        <h3 className="mb-6 text-2xl font-bold text-center" data-aos="fade-up">
          Career Highlights
        </h3>

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`p-6 transition border border-nyuki-stripe/20 rounded-lg bg-nyuki-black/80 backdrop-blur ${highlight.hoverColor} group`}
                data-aos="fade-up"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gray-800 rounded-full">
                    <Icon className={`text-xl ${highlight.iconColor}`} />
                  </div>
                  <span className="text-4xl font-bold text-nyuki-wax">
                    {highlight.number}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold tracking-wider text-gray-300 uppercase">
                  {highlight.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    {highlight.description}
                  </p>
                  <FaArrowRight
                    className={`text-gray-600 transition ${highlight.arrowHover}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="/James Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 font-semibold transition rounded-lg bg-gradient-to-r from-nyuki-honey to-nyuki-gold text-nyuki-black hover:from-nyuki-gold hover:to-nyuki-honey"
          >
            <FaFileAlt />
            <span>View Resume</span>
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 font-semibold transition border rounded-lg bg-nyuki-stripe/20 hover:bg-nyuki-stripe/30 border-nyuki-stripe/50 text-nyuki-wax"
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
