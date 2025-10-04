import { useEffect } from "react";
import { FaLaptopCode, FaServer, FaChalkboardTeacher } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  // Initialize animations when component loads
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out", once: true });
  }, []);

  // Services data array
  const services = [
    {
      id: 1,
      title: "Development",
      icon: <FaLaptopCode className="text-5xl text-nyuki-gold" />,
      description:
        "I build modern, responsive websites and applications using React, Node.js, and the latest technologies to deliver seamless digital experiences.",
    },
    {
      id: 2,
      title: "API Integration",
      icon: <FaServer className="text-5xl text-nyuki-honey" />,
      description:
        "I connect your applications to external services with secure API integrations, database setups, and authentication systems for smooth operations.",
    },
    {
      id: 3,
      title: "Training",
      icon: <FaChalkboardTeacher className="text-5xl text-nyuki-stripe" />,
      description:
        "I provide web development training, mentorship, and workshops to help individuals and teams sharpen their technical skills and stay ahead.",
    },
  ];

  return (
    <section id="services" className="w-full px-4 mt-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2
          className="mb-4 text-4xl font-bold text-transparent md:text-5xl md:pt-12 bg-clip-text bg-gradient-to-r from-nyuki-honey to-nyuki-gold"
          data-aos="fade-up"
        >
          Services
        </h2>

        {/* Section Description */}
        <p
          className="max-w-2xl mx-auto mb-12 text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Helping you build, connect, and grow with expert web solutions and
          personalized training.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="p-8 transition border border-nyuki-stripe/30 bg-nyuki-black/80 rounded-xl hover:border-nyuki-honey"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-6">{service.icon}</div>

              {/* Service Title */}
              <h3 className="mb-4 text-2xl font-semibold text-nyuki-wax">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="#contact"
            className="inline-block px-6 py-3 font-semibold transition rounded-lg bg-gradient-to-r from-nyuki-honey to-nyuki-gold text-nyuki-black hover:from-nyuki-gold hover:to-nyuki-honey"
          >
            Procure a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
