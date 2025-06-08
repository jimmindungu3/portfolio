import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaArrowRight } from "react-icons/fa";
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
    <section id="socials" className="w-full px-4 py-16 text-white ">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Let's Connect
        </h2>

        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-300">
          Follow me on social media to stay updated with my latest projects,
          articles, and activities. Let's build a community of tech enthusiasts
          together!
        </p>

        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-6 transition border border-gray-800 bg-gray-900/80 backdrop-blur rounded-xl hover:border-gray-700 group"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gray-800/70 text-gray-300 group-${platform.color} transition duration-300`}
              >
                {platform.icon}
              </div>

              <h3 className="mb-2 text-xl font-semibold">{platform.name}</h3>

              <p className="flex-grow mb-4 text-sm text-gray-400">
                {platform.description}
              </p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-medium text-gray-300">
                  Follow
                </span>
                <FaArrowRight className="w-5 h-5 text-gray-500 transition-all transform group-hover:text-blue-400 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
