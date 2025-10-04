import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Services you offer
  const services = [
    "Custom Web Applications",
    "Responsive Frontend Design",
    "Backend & API Development",
    "E-commerce Platforms with Payment Integration",
    "Full-stack Deployment & Maintenance",
  ];

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full min-h-screen px-4 py-16 overflow-hidden md:py-24 lg:py-32"
    >
      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Main grid */}
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left side - Text */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="space-y-6">
              {/* Greeting */}
              <p className="text-lg font-medium tracking-wide text-nyuki-stripe">
                Hello There!
              </p>

              {/* Name */}
              <div className="relative">
                <h1 className="text-4xl font-bold leading-tight text-transparent md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-nyuki-honey via-nyuki-gold to-nyuki-stripe">
                  I'm James Ndung'u
                </h1>
                <div className="w-32 h-1 mt-4 rounded-full bg-gradient-to-r from-nyuki-gold to-transparent"></div>
              </div>

              {/* Titles */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-nyuki-wax">
                  Full Stack Web Developer
                </h2>
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-nyuki-wax">
                  & TVET Trainer
                </h2>
              </div>

              {/* Description */}
              <p className="max-w-xl text-lg leading-relaxed text-gray-300">
                I build web applications that help businesses operate
                efficiently and users engage seamlessly. From intuitive,
                responsive interfaces to reliable backends and APIs, I deliver
                solutions that solve real-world problems.
              </p>

              {/* Services badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {services.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium transition-colors duration-300 border rounded-lg text-nyuki-black bg-nyuki-wax border-nyuki-honey/30 hover:bg-nyuki-stripe"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-8 py-4 font-bold transition-all duration-300 rounded-lg group text-nyuki-black bg-gradient-to-r from-nyuki-honey to-nyuki-gold hover:from-nyuki-gold hover:to-nyuki-honey hover:shadow-lg hover:shadow-nyuki-honey/50 hover:scale-105"
                  data-aos="fade-up"
                >
                  <MdContactPhone className="transition-transform duration-300 group-hover:rotate-12" />
                  <span>Get In Touch</span>
                </a>

                <a
                  href="/James Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 font-bold transition-all duration-300 border-2 rounded-lg group text-nyuki-wax border-nyuki-stripe hover:bg-nyuki-stripe/20 hover:border-nyuki-honey hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <FaFileAlt className="group-hover:translate-y-[-2px] transition-transform duration-300" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Social links */}
              <div
                className="flex gap-4 pt-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a
                  href="https://github.com/jimmindungu3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 transition-all duration-300 border-2 rounded-full border-nyuki-stripe/30 text-nyuki-honey hover:bg-nyuki-honey hover:text-nyuki-black hover:border-nyuki-honey hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jamesndunguthedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 transition-all duration-300 border-2 rounded-full border-nyuki-stripe/30 text-nyuki-honey hover:bg-nyuki-honey hover:text-nyuki-black hover:border-nyuki-honey hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div
            className="flex justify-center order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="relative">
              {/* Decorative glow */}
              <div
                className="absolute rounded-full -inset-8 bg-gradient-to-r from-nyuki-honey/20 to-nyuki-gold/20 blur-3xl"
                style={{
                  animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              ></div>

              {/* Profile image */}
              <div className="flex justify-center md:justify-start relative">
                {/* Decorative glow */}
                <div
                  className="absolute rounded-full -inset-8 bg-gradient-to-r from-nyuki-honey/20 to-nyuki-gold/20 blur-2xl"
                  style={{
                    animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                ></div>

                {/* Profile image */}
                <img
                  src="/james.png"
                  alt="James Ndung'u's profile image"
                  className="w-3/4 md:w-full max-w-md border-2 rounded-full shadow-2xl border-nyuki-stripe shadow-nyuki-honey/20 relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
