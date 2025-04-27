import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LetsConnect = () => {
  const socialPlatforms = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/jimmindungu3",
      color: "hover:text-white hover:bg-gray-800",
      description: "Check out my code repositories and projects",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/jamesndunguthedev",
      color: "hover:text-white hover:bg-blue-600",
      description: "Connect professionally and explore my experience",
    },
    {
      name: "X",
      icon: <FaXTwitter className="text-2xl" />,
      url: "https://x.com/ndunguthedev",
      color: "hover:text-white hover:bg-blue-400",
      description: "Follow me for updates and tech discussions",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-2xl" />,
      url: "https://www.youtube.com/@DevsToday",
      color: "hover:text-white hover:bg-red-600",
      description: "Watch my tutorials and coding sessions",
    },
  ];

  return (
    <section id="socials" className="w-full py-16 px-4 mb-16 text-white ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Let's Connect
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Follow me on social media to stay updated with my latest projects,
          articles, and activities. Let's build a community of tech enthusiasts
          together!
        </p>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/80 backdrop-blur rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition group flex flex-col"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gray-800/70 text-gray-300 group-${platform.color} transition duration-300`}
              >
                {platform.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>

              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {platform.description}
              </p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-medium text-gray-300">
                  Follow
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
