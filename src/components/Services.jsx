import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaChalkboardTeacher,
  FaLightbulb,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Services = () => {
  // Initialize state for active tab
  const [activeTab, setActiveTab] = useState("development");
  // Add a key state to force re-render of service items when tab changes
  const [refreshKey, setRefreshKey] = useState(0);

  // Services data organized by category
  const servicesData = {
    development: [
      {
        id: 1,
        title: "Website Development",
        icon: (
          <FaLaptopCode className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors" />
        ),
        description:
          "Professional websites built with modern technologies like React, Next.js, and responsive design principles to ensure your site works flawlessly across all devices.",
      },
      {
        id: 2,
        title: "E-commerce Solutions",
        icon: (
          <FaCode className="text-4xl text-purple-400 group-hover:text-purple-300 transition-colors" />
        ),
        description:
          "Custom online stores with secure payment processing, inventory management, and user-friendly interfaces to help your business thrive in the digital marketplace.",
      },
      {
        id: 3,
        title: "UI/UX Design",
        icon: (
          <FaLaptopCode className="text-4xl text-pink-400 group-hover:text-pink-300 transition-colors" />
        ),
        description:
          "Intuitive and engaging user experiences with beautiful interfaces that enhance customer satisfaction and conversion rates for your digital products.",
      },
    ],
    integration: [
      {
        id: 1,
        title: "API Integration",
        icon: (
          <FaServer className="text-4xl text-green-400 group-hover:text-green-300 transition-colors" />
        ),
        description:
          "Seamless connection of your website with third-party services, payment gateways, and data sources through custom API integrations.",
      },
      {
        id: 2,
        title: "Database Solutions",
        icon: (
          <FaServer className="text-4xl text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        ),
        description:
          "Robust database design and implementation using SQL and NoSQL solutions to securely store and efficiently retrieve your application data.",
      },
      {
        id: 3,
        title: "Authentication Systems",
        icon: (
          <FaServer className="text-4xl text-teal-400 group-hover:text-teal-300 transition-colors" />
        ),
        description:
          "Secure user authentication and authorization systems with JWT, OAuth, and other modern security protocols to protect your users and data.",
      },
    ],
    training: [
      {
        id: 1,
        title: "Web Development Training",
        icon: (
          <FaChalkboardTeacher className="text-4xl text-orange-400 group-hover:text-orange-300 transition-colors" />
        ),
        description:
          "Hands-on training programs for individuals and teams looking to master modern web development technologies and best practices.",
      },
      {
        id: 2,
        title: "Code Mentorship",
        icon: (
          <FaChalkboardTeacher className="text-4xl text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        ),
        description:
          "One-on-one mentoring sessions to help you overcome coding challenges, improve your skills, and grow as a developer.",
      },
      {
        id: 3,
        title: "Technical Workshops",
        icon: (
          <FaChalkboardTeacher className="text-4xl text-red-400 group-hover:text-red-300 transition-colors" />
        ),
        description:
          "Specialized group sessions focused on specific technologies or development concepts to accelerate learning in a collaborative environment.",
      },
    ],
    consultation: [
      {
        id: 1,
        title: "Web Consultation",
        icon: (
          <FaLightbulb className="text-4xl text-amber-400 group-hover:text-amber-300 transition-colors" />
        ),
        description:
          "Strategic guidance on web technologies, architecture decisions, and digital transformation to help your business succeed online.",
      },
      {
        id: 2,
        title: "Performance Optimization",
        icon: (
          <FaLightbulb className="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors" />
        ),
        description:
          "Analysis and improvement of your existing web applications to enhance speed, reliability, and user experience.",
      },
      {
        id: 3,
        title: "Technical Assessment",
        icon: (
          <FaLightbulb className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors" />
        ),
        description:
          "Comprehensive evaluation of your current digital infrastructure with actionable recommendations for improvement and growth.",
      },
    ],
  };

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  // Handle tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Reset AOS animations and force re-render of service items
    setTimeout(() => {
      AOS.refresh();
      setRefreshKey(prevKey => prevKey + 1);
    }, 50);
  };

  // Define tab data with icons and labels
  const tabs = [
    { id: "development", label: "Development", icon: <FaLaptopCode /> },
    { id: "integration", label: "API & Integration", icon: <FaServer /> },
    { id: "training", label: "Training", icon: <FaChalkboardTeacher /> },
    { id: "consultation", label: "Consultation", icon: <FaLightbulb /> },
  ];

  return (
    <section
      id="services"
      className="w-full px-4 mt-48 text-white md:min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 lg:pt-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          Services
        </h2>

        {/* Subtitle */}
        <p
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Expert web solutions tailored to your needs. From development to
          consultation, I provide comprehensive services to help your digital
          projects succeed.
        </p>

        {/* Tabs */}
        <div className="flex overflow-x-auto md:justify-center mb-10 gap-2 p-2 rounded-xl bg-gray-900/50 backdrop-blur border border-gray-800 max-w-3xl mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-3 rounded-lg flex items-center justify-center gap-2 min-w-[140px] transition ${
                activeTab === tab.id
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <span className={activeTab === tab.id ? "text-blue-400" : ""}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={refreshKey} // Force re-render when tab changes
        >
          {servicesData[activeTab].map((service) => (
            <div
              key={`${activeTab}-${service.id}`} // Include active tab in key to ensure proper re-rendering
              className="bg-gray-900/80 backdrop-blur rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-900/50 transition group p-6"
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              {/* Icon centered at the top */}
              <div className="flex justify-center mb-6">
                <div className="transform group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Service content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-300 mb-4">
            Interested in working together? Let's discuss your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;