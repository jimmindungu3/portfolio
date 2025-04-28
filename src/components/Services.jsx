import React, { useEffect } from "react";
import { FaLaptopCode, FaServer, FaChalkboardTeacher } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out", once: true });
  }, []);

  const services = [
    {
      id: 1,
      title: "Development",
      icon: <FaLaptopCode className="text-5xl text-blue-400" />,
      description:
        "I build modern, responsive websites and applications using React, Node.js, and the latest technologies to deliver seamless digital experiences.",
    },
    {
      id: 2,
      title: "API Integration",
      icon: <FaServer className="text-5xl text-green-400" />,
      description:
        "I connect your applications to external services with secure API integrations, database setups, and authentication systems for smooth operations.",
    },
    {
      id: 3,
      title: "Training",
      icon: <FaChalkboardTeacher className="text-5xl text-orange-400" />,
      description:
        "I provide web development training, mentorship, and workshops to help individuals and teams sharpen their technical skills and stay ahead.",
    },
  ];

  return (
    <section id="services" className="w-full px-4 mt-48 text-white md:min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 md:pt-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          Services
        </h2>
        <p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Helping you build, connect, and grow with expert web solutions and personalized training.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gray-900/80 border border-gray-800 p-8 rounded-xl hover:border-indigo-600 transition"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition"
          >
            Procure a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
