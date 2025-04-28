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
        title: "MERN Stack Development",
        icon: (
          <FaLaptopCode className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors" />
        ),
        description:
          "Full-stack applications built with MongoDB, Express.js, React, and Node.js, offering scalable and efficient web solutions.",
      },
      {
        id: 2,
        title: "Django Backend Development",
        icon: (
          <FaCode className="text-4xl text-purple-400 group-hover:text-purple-300 transition-colors" />
        ),
        description:
          "Robust backend systems with Django, ensuring secure APIs, efficient database management, and scalable architectures.",
      },
      {
        id: 3,
        title: "Responsive Frontend Design",
        icon: (
          <FaLaptopCode className="text-4xl text-pink-400 group-hover:text-pink-300 transition-colors" />
        ),
        description:
          "Modern, mobile-first UI designs using React and Tailwind CSS to deliver clean and responsive user experiences.",
      },
    ],
    integration: [
      {
        id: 1,
        title: "API Development & Integration",
        icon: (
          <FaServer className="text-4xl text-green-400 group-hover:text-green-300 transition-colors" />
        ),
        description:
          "Custom APIs and seamless third-party integrations for payments, authentication, and data services.",
      },
      {
        id: 2,
        title: "Database Design",
        icon: (
          <FaServer className="text-4xl text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        ),
        description:
          "Optimized database schemas and queries with MongoDB and SQL for efficient data management and retrieval.",
      },
      {
        id: 3,
        title: "Authentication & Security",
        icon: (
          <FaServer className="text-4xl text-teal-400 group-hover:text-teal-300 transition-colors" />
        ),
        description:
          "Secure login systems using JWT, OAuth, and best practices to protect user data and enhance app security.",
      },
    ],
    training: [
      {
        id: 1,
        title: "Fullstack Web Training",
        icon: (
          <FaChalkboardTeacher className="text-4xl text-orange-400 group-hover:text-orange-300 transition-colors" />
        ),
        description:
          "Training sessions on modern web development stacks, focusing on React, Node.js, MongoDB, and RESTful APIs.",
      },
      {
        id: 2,
        title: "Coding Mentorship",
        icon: (
          <FaChalkboardTeacher className="text-4xl text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        ),
        description:
          "One-on-one mentorship to help junior developers build strong foundational skills and real-world project experience.",
      },
      {
        id: 3,
        title: "Career Coaching",
        icon: (
          <FaChalkboardTeacher className="text-4xl text-red-400 group-hover:text-red-300 transition-colors" />
        ),
        description:
          "Guidance on portfolio building, interview preparation, and soft skills necessary for tech career success.",
      },
    ],
    consultation: [
      {
        id: 1,
        title: "Technical Consultation",
        icon: (
          <FaLightbulb className="text-4xl text-amber-400 group-hover:text-amber-300 transition-colors" />
        ),
        description:
          "Advice on technology stack selection, system architecture, and project planning for startups and businesses.",
      },
      {
        id: 2,
        title: "Performance Optimization",
        icon: (
          <FaLightbulb className="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors" />
        ),
        description:
          "Optimizing website speed, database performance, and API efficiency to deliver faster and more reliable apps.",
      },
      {
        id: 3,
        title: "Security Best Practices",
        icon: (
          <FaLightbulb className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors" />
        ),
        description:
          "Evaluating and enhancing application security with best practices in authentication, data protection, and server configuration.",
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
      setRefreshKey((prevKey) => prevKey + 1);
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
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
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
