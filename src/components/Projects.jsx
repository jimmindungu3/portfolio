import { useState, useEffect } from "react";
import {
  FaCode,
  FaCertificate,
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
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
    {
      id: 5,
      title: "Property Listing Website",
      image: "/mburoti.png",
      description:
        "A real estate platform for Mburoti Maguta that lists land and property for sale. Built with the MERN stack, featuring property details, images, pricing, and buyer contact options.",
      demoUrl: "https://mburoti-maguta-maguta.vercel.app/",
      detailsUrl: "https://github.com/jimmindungu3",
      bgColor: "from-emerald-900/70 to-lime-900/40",
    },
  ];

  const certificatesData = [
    {
      id: 1,
      title: "Software Engineering Certification - Moringa School",
      image: "/moringa-certificate.jpg",
      bgColor: "from-blue-800/40 to-blue-600/30",
    },
    {
      id: 2,
      title: "Certificate of Merit - Thika Technical Training Institute",
      image: "/thika-tti-merit.jpeg",
      bgColor: "from-purple-800/40 to-purple-600/30",
    },
    {
      id: 3,
      title: "Certificate of Recognition - Kenya National Bureau of Statistics",
      image: "/knbs-certificate.jpg",
      bgColor: "from-green-800/40 to-green-600/30",
    },
  ];

  const openPreview = (imageSrc) => {
    setPreviewImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setPreviewImage(null);
    document.body.style.overflow = "auto";
  };

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
    <section id="projects" className="w-full px-4 mt-48 mb-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="mb-4 text-4xl font-bold text-center text-transparent md:text-5xl lg:pt-12 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          Portfolio
        </h2>

        <p
          className="max-w-3xl mx-auto mb-12 text-center text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore my journey through projects, certificates, and technical
          expertise. Each one represents a milestone in my continuous learning
          and career paths.
        </p>

        <div className="flex max-w-2xl gap-2 p-2 mx-auto mb-10 overflow-x-auto border border-gray-800 md:justify-center rounded-xl bg-gray-900/50 backdrop-blur">
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

        {activeTab === "projects" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden transition border border-gray-800 bg-gray-900/80 backdrop-blur rounded-xl hover:border-indigo-900/50 group"
                data-aos="fade-up"
                data-aos-delay={project.id * 100}
              >
                <div
                  className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.bgColor}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full p-3 transition duration-300 transform group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex justify-between">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center gap-1 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={12} />
                    </a>

                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      className="flex items-center gap-1 text-sm font-medium text-white transition hover:text-purple-400"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificatesData.map((certificate) => (
              <div
                key={certificate.id}
                className="overflow-hidden transition border border-gray-800 bg-gray-900/80 backdrop-blur rounded-xl hover:border-purple-900/50 group"
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
                    className="object-contain w-full h-full p-4 transition duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-0 group-hover:bg-opacity-40">
                    <span className="text-white transition opacity-0 group-hover:opacity-100">
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

        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={closePreview}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              <button
                className="absolute p-2 text-white transition bg-gray-900 rounded-full top-2 right-2 hover:bg-gray-700"
                onClick={closePreview}
              >
                <FaTimes size={18} />
              </button>

              {/* Image */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
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
