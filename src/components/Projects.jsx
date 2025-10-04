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
  // State to track which tab is active (projects or certificates)
  const [activeTab, setActiveTab] = useState("projects");
  // State to track which image is being previewed
  const [previewImage, setPreviewImage] = useState(null);

  // Projects data array
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      image: "/xirion-africa.png",
      description:
        "A fully functional e-commerce platform built with MERN stack. Users can browse products, add to cart, and checkout.",
      demoUrl: "https://xirion-africa.vercel.app/",
      detailsUrl: "#",
      bgColor: "from-nyuki-honey/30 to-nyuki-stripe/20",
    },
    {
      id: 2,
      title: "Booking System",
      image: "/tiketa.png",
      description:
        "A booking system where users can reserve tickets for events online. Mpesa Integrated.",
      demoUrl: "https://tiketa.vercel.app/",
      detailsUrl: "https://github.com/jimmindungu3/Tiketa",
      bgColor: "from-nyuki-gold/30 to-nyuki-honey/20",
    },
    {
      id: 3,
      title: "JWT Authentication Demo",
      image: "/jwt.svg",
      description:
        "A simple register, login-logout application that demos authentication using JWTs.",
      demoUrl: "#",
      detailsUrl: "https://github.com/jimmindungu3/JWT",
      bgColor: "from-nyuki-stripe/30 to-nyuki-gold/20",
    },
    {
      id: 4,
      title: "LMS System (Coming Soon)",
      image: "/lms.webp",
      description:
        "An upcoming Learning Management System for online education and course management.",
      demoUrl: "#",
      detailsUrl: "#",
      bgColor: "from-nyuki-honey/30 to-nyuki-gold/30",
    },
    {
      id: 5,
      title: "Property Listing Website",
      image: "/mburoti.png",
      description:
        "A real estate platform for Mburoti Maguta that lists land and property for sale. Built with the MERN stack, featuring property details, images, pricing, and buyer contact options.",
      demoUrl: "https://mburoti-maguta-maguta.vercel.app/",
      detailsUrl: "https://github.com/jimmindungu3",
      bgColor: "from-nyuki-gold/30 to-nyuki-stripe/20",
    },
  ];

  // Certificates data array
  const certificatesData = [
    {
      id: 1,
      title: "Software Engineering Certification - Moringa School",
      image: "/moringa-certificate.jpg",
      bgColor: "from-nyuki-honey/40 to-nyuki-gold/30",
    },
    {
      id: 2,
      title: "Certificate of Merit - Thika Technical Training Institute",
      image: "/thika-tti-merit.jpeg",
      bgColor: "from-nyuki-gold/40 to-nyuki-stripe/30",
    },
    {
      id: 3,
      title: "Certificate of Recognition - Kenya National Bureau of Statistics",
      image: "/knbs-certificate.jpg",
      bgColor: "from-nyuki-stripe/40 to-nyuki-honey/30",
    },
  ];

  // Function to open image preview
  const openPreview = (imageSrc) => {
    setPreviewImage(imageSrc);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Function to close image preview
  const closePreview = () => {
    setPreviewImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Close preview when Escape key is pressed
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

  // Initialize AOS animations
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
        {/* Section Title */}
        <h2
          className="mb-4 text-4xl font-bold text-center text-transparent md:text-5xl lg:pt-12 bg-clip-text bg-gradient-to-r from-nyuki-honey to-nyuki-gold"
          data-aos="fade-up"
        >
          Portfolio
        </h2>

        {/* Section Description */}
        <p
          className="max-w-3xl mx-auto mb-12 text-center text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore my journey through projects, certificates, and technical
          expertise. Each one represents a milestone in my continuous learning
          and career paths.
        </p>

        {/* Tab Navigation */}
        <div className="flex max-w-2xl gap-2 p-2 mx-auto mb-10 overflow-x-auto border border-nyuki-stripe/30 md:justify-center rounded-xl bg-nyuki-black/50 backdrop-blur">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 min-w-[120px] transition ${
              activeTab === "projects"
                ? "bg-nyuki-honey/20 text-nyuki-wax border border-nyuki-honey/50"
                : "text-gray-400 hover:text-nyuki-wax"
            }`}
            data-aos="zoom-in"
          >
            <FaCode
              className={activeTab === "projects" ? "text-nyuki-gold" : ""}
            />
            <span>Projects</span>
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 min-w-[120px] transition ${
              activeTab === "certificates"
                ? "bg-nyuki-honey/20 text-nyuki-wax border border-nyuki-honey/50"
                : "text-gray-400 hover:text-nyuki-wax"
            }`}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaCertificate
              className={activeTab === "certificates" ? "text-nyuki-gold" : ""}
            />
            <span>Certificates</span>
          </button>
        </div>

        {/* Projects Tab Content */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden transition border border-nyuki-stripe/30 bg-nyuki-black/80 backdrop-blur rounded-xl hover:border-nyuki-honey group"
                data-aos="fade-up"
                data-aos-delay={project.id * 100}
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-transparent">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition duration-300 transform group-hover:scale-105"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-nyuki-wax">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-300">
                    {project.description}
                  </p>

                  {/* Project Links */}
                  <div className="flex justify-between">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center gap-1 text-sm font-medium text-nyuki-gold transition hover:text-nyuki-honey"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={12} />
                    </a>

                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      className="flex items-center gap-1 text-sm font-medium text-nyuki-wax transition hover:text-nyuki-honey"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates Tab Content */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificatesData.map((certificate) => (
              <div
                key={certificate.id}
                className="overflow-hidden transition border border-nyuki-stripe/30 bg-nyuki-black/80 backdrop-blur rounded-xl hover:border-nyuki-gold group"
                data-aos="fade-up"
                data-aos-delay={certificate.id * 100}
              >
                {/* Certificate Image */}
                <div
                  className="relative h-64 overflow-hidden bg-transparent cursor-pointer"
                  onClick={() => openPreview(certificate.image)}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="object-cover w-full h-full transition duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-0 group-hover:bg-opacity-40">
                    <span className="text-nyuki-wax transition opacity-0 group-hover:opacity-100">
                      Click to view
                    </span>
                  </div>
                </div>

                {/* Certificate Title */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-nyuki-wax">
                    {certificate.title}
                  </h3>
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
              {/* Close Button */}
              <button
                className="absolute p-2 text-nyuki-wax transition bg-nyuki-black/80 border border-nyuki-stripe/50 rounded-full top-2 right-2 hover:bg-nyuki-honey/20"
                onClick={closePreview}
              >
                <FaTimes size={18} />
              </button>

              {/* Preview Image */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <img
                  src={previewImage}
                  alt="Certificate preview"
                  className="w-full object-contain rounded-lg max-h-[85vh] border-2 border-nyuki-stripe/50"
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
