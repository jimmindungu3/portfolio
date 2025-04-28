import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaCertificate,
  FaExternalLinkAlt,
  FaArrowRight,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS CSS

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  // Add state for the image preview modal
  const [previewImage, setPreviewImage] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      image: "/xirion-africa.png",
      description:
        "A fully functional e-commerce platform built with MERN stack. Users can browse products, add to cart, and checkout.",
      demoUrl: "https://xirion-africa.vercel.app/",
      detailsUrl: "#",
      bgColor: "from-green-900/70 to-teal-900/40",
    },
    {
      id: 2,
      title: "Booking System",
      image: "/tiketa.png",
      description:
        "A booking system where users can reserve tickets for events online. Mpesa Integrated.",
      demoUrl: "https://tiketa.vercel.app/",
      detailsUrl: "https://github.com/jimmindungu3/Tiketa",
      bgColor: "from-blue-900/70 to-indigo-900/40",
    },
    {
      id: 3,
      title: "JWT Authentication Demo",
      image: "/jwt.svg",
      description:
        "A simple register, login-logout application that demos authentication using JWTs.",
      demoUrl: "#",
      detailsUrl: "https://github.com/jimmindungu3/JWT",
      bgColor: "from-teal-900/70 to-fuchsia-900/40",
    },
    {
      id: 4,
      title: "LMS System (Coming Soon)",
      image: "/lms.webp",
      description:
        "An upcoming Learning Management System for online education and course management.",
      demoUrl: "#",
      detailsUrl: "#",
      bgColor: "from-purple-900/70 to-rose-900/40",
    },
  ];

  // Certificate data
  const certificatesData = [
    {
      id: 1,
      title: "Software Engineering Certification - Moringa School",
      image: "/moringa-certificate.jpg",
      bgColor: "from-blue-800/40 to-blue-600/30", // Deep Blue
    },
    {
      id: 2,
      title: "Certificate of Merit - Thika Technical Training Institute",
      image: "/thika-tti-merit.jpeg",
      bgColor: "from-purple-800/40 to-purple-600/30", // Royal Purple
    },
    {
      id: 3,
      title: "Certificate of Recognition - Kenya National Bureau of Statistics",
      image: "/knbs-certificate.jpg",
      bgColor: "from-green-800/40 to-green-600/30", // Emerald Green
    },
  ];

  // Function to open the image preview modal
  const openPreview = (imageSrc) => {
    setPreviewImage(imageSrc);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  // Function to close the image preview modal
  const closePreview = () => {
    setPreviewImage(null);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = "auto";
  };

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && previewImage) {
        closePreview();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [previewImage]);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full px-4 mt-48 text-white md:min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 lg:pt-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          Portfolio Showcase
        </h2>

        {/* Subtitle */}
        <p
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore my journey through projects, certificates, and technical
          expertise. Each one represents a milestone in my continuous learning
          and career paths.
        </p>

        {/* Tabs */}
        <div className="flex overflow-x-auto md:justify-center mb-10 gap-2 p-2 rounded-xl bg-gray-900/50 backdrop-blur border border-gray-800 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 min-w-[120px] transition ${
              activeTab === "projects"
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
            data-aos="zoom-in"
          >
            <FaCode
              className={activeTab === "projects" ? "text-blue-400" : ""}
            />
            <span>Projects</span>
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 min-w-[120px] transition ${
              activeTab === "certificates"
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaCertificate
              className={activeTab === "certificates" ? "text-purple-400" : ""}
            />
            <span>Certificates</span>
          </button>
        </div>

        {/* Projects Grid */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/80 backdrop-blur rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-900/50 transition group"
                data-aos="fade-up"
                data-aos-delay={project.id * 100}
              >
                {/* Project image */}
                <div
                  className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.bgColor}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-3 transform group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    {project.description}
                  </p>

                  <div className="flex justify-between">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-medium transition"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={12} />
                    </a>

                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      className="text-white hover:text-purple-400 flex items-center gap-1 text-sm font-medium transition"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates Grid */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-gray-900/80 backdrop-blur rounded-xl overflow-hidden border border-gray-800 hover:border-purple-900/50 transition group"
                data-aos="fade-up"
                data-aos-delay={certificate.id * 100}
              >
                <div
                  className={`relative h-64 overflow-hidden bg-gradient-to-br ${certificate.bgColor} cursor-pointer`}
                  onClick={() => openPreview(certificate.image)}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition duration-300"
                  />
                  {/* Add a visual indicator that this is clickable */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition">
                      Click to view
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{certificate.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Image Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={closePreview}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-white bg-gray-900 rounded-full p-2 hover:bg-gray-700 transition"
                onClick={closePreview}
              >
                <FaTimes size={18} />
              </button>

              {/* Image */}
              <div
                className="relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
              >
                <img
                  src={previewImage}
                  alt="Certificate preview"
                  className="w-full object-contain rounded-lg max-h-[85vh]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
