import { useEffect } from "react";
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
    <section id="services" className="w-full px-4 mt-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="mb-4 text-4xl font-bold text-transparent md:text-5xl md:pt-12 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          Services
        </h2>
        <p
          className="max-w-2xl mx-auto mb-12 text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Helping you build, connect, and grow with expert web solutions and personalized training.
        </p>

        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="p-8 transition border border-gray-800 bg-gray-900/80 rounded-xl hover:border-indigo-600"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="#contact"
            className="inline-block px-6 py-3 font-medium text-white transition rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            Procure a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
