import { useState } from "react";
import { SiMongodb, SiExpress, SiDjango, SiPostman } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaChrome,
  FaJira,
  FaFigma,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export default function MySkills() {
  const [activeSkill, setActiveSkill] = useState("mongodb");

  const skills = {
    mongodb: {
      title: "MongoDB",
      description: "Flexible NoSQL database storing JSON-like documents.",
      icon: <SiMongodb className="text-green-500" size={48} />,
      details: [
        "Schema design",
        "Aggregation",
        "Atlas deployment",
        "Data modeling",
      ],
    },
    express: {
      title: "Express.js",
      description: "Minimal web framework for Node.js APIs.",
      icon: <SiExpress className="text-gray-400" size={48} />,
      details: ["REST APIs", "Middleware", "Authentication", "Routing"],
    },
    react: {
      title: "React",
      description: "Frontend library for building UIs with components.",
      icon: <FaReact className="text-blue-400" size={48} />,
      details: ["Hooks", "Context API", "Component-driven", "State management"],
    },
    node: {
      title: "Node.js",
      description: "JavaScript runtime for backend services.",
      icon: <FaNodeJs className="text-green-400" size={48} />,
      details: ["Event-driven", "NPM", "Backend APIs", "Microservices"],
    },
    python: {
      title: "Python",
      description: "High-level language for automation and backend.",
      icon: <FaPython className="text-yellow-400" size={48} />,
      details: ["Scripting", "Data analysis", "Machine learning", "Web apps"],
    },
    django: {
      title: "Django",
      description: "High-level Python framework for rapid web development.",
      icon: <SiDjango className="text-green-600" size={48} />,
      details: [
        "ORM",
        "Authentication",
        "Django REST Framework",
        "MVC pattern",
      ],
    },
    sql: {
      title: "SQL",
      description: "Language for relational database management.",
      icon: <BsFiletypeSql className="text-blue-500" size={48} />,
      details: ["Joins", "Subqueries", "Optimization", "Data modeling"],
    },
    tailwindcss: {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for responsive designs.",
      icon: <RiTailwindCssFill className="text-teal-400" size={48} />,
      details: [
        "Responsive design",
        "Dark mode",
        "Custom theming",
        "Component styling",
      ],
    },
    git: {
      title: "Git",
      description: "Version control system for code collaboration.",
      icon: <FaGitAlt className="text-orange-500" size={48} />,
      details: ["Branching", "Merging", "Rebasing", "Pull requests"],
    },
    vscode: {
      title: "VS Code",
      description: "Lightweight code editor with extensions.",
      icon: <VscVscode className="text-blue-400" size={48} />,
      details: [
        "Extensions",
        "Terminal integration",
        "IntelliSense",
        "Git support",
      ],
    },
    postman: {
      title: "Postman",
      description: "API platform for building and testing APIs.",
      icon: <SiPostman className="text-orange-400" size={48} />,
      details: [
        "API testing",
        "Collections",
        "Automation",
        "Environment variables",
      ],
    },
    chrome: {
      title: "Chrome DevTools",
      description: "Debugging tools built into Chrome.",
      icon: <FaChrome className="text-blue-400" size={48} />,
      details: [
        "Inspect Element",
        "Network analysis",
        "Performance profiling",
        "Console debugging",
      ],
    },
    jira: {
      title: "Jira",
      description: "Agile project management tool.",
      icon: <FaJira className="text-blue-500" size={48} />,
      details: ["Scrum boards", "Sprint planning", "Issue tracking", "Reports"],
    },
    figma: {
      title: "Figma",
      description: "Collaborative UI/UX design tool.",
      icon: <FaFigma className="text-purple-400" size={48} />,
      details: [
        "Wireframing",
        "Prototyping",
        "Design systems",
        "Collaboration",
      ],
    },
  };

  return (
    <section id="skills" className="min-h-screen py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Skills & Tools
          </h1>
        </header>

        {/* Skill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(skills).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSkill(key)}
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                activeSkill === key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {skills[key].title}
            </button>
          ))}
        </div>

        {/* Skill Details */}
        <div className="bg-gray-900/70 backdrop-blur rounded-xl p-8 border border-gray-800 shadow-md transition hover:border-gray-600">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">{skills[activeSkill].icon}</div>
            <div>
              <h2 className="text-2xl font-bold">
                {skills[activeSkill].title}
              </h2>
              <p className="text-gray-400 mt-2">
                {skills[activeSkill].description}
              </p>

              <h3 className="mt-6 mb-3 font-semibold text-blue-400">
                Key Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills[activeSkill].details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mt-10">
            <h3 className="text-blue-400 font-semibold mb-6">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Xirion-Africa (E-Commerce Platform)",
                  desc: "Full-stack MERN store with authentication and payments.",
                  color: "blue-400",
                },
                {
                  title: "Tiketa - Online Ticket Selling Platform",
                  desc: "MERN powered. M-pesa integrated",
                  color: "purple-400",
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-600 group transition"
                >
                  <h4 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">View Project</span>
                    <FaExternalLinkAlt
                      className={`h-4 w-4 text-${project.color} group-hover:translate-x-1 transition`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
