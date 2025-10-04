import { useState } from "react";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaExternalLinkAlt } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export default function MySkills() {
  const [activeSkill, setActiveSkill] = useState("mongodb");

  const skills = {
    mongodb: {
      title: "MongoDB",
      description:
        "Designed flexible schemas for Xirion-Africa and Tiketa, ensuring scalable data storage for products, users, and transactions.",
      icon: <SiMongodb className="text-green-500" size={48} />,
      details: [
        "Product catalog modeling",
        "User authentication storage",
        "Order & transaction tracking",
        "Aggregation pipelines for reporting",
      ],
    },
    express: {
      title: "Express.js",
      description:
        "Built RESTful APIs powering user authentication, product management, and payment processing for MERN projects.",
      icon: <SiExpress className="text-gray-400" size={48} />,
      details: [
        "Authentication endpoints",
        "CRUD APIs for products & orders",
        "Middleware for validation & security",
        "Integration with M-Pesa payments",
      ],
    },
    react: {
      title: "React",
      description:
        "Developed dynamic, responsive UIs for online stores and ticketing platforms, implementing reusable components and state management.",
      icon: <FaReact className="text-blue-400" size={48} />,
      details: [
        "Component-driven design",
        "React Router for navigation",
        "State management with hooks",
        "Form handling & validations",
      ],
    },
    node: {
      title: "Node.js",
      description:
        "Created backend services for MERN applications, handling server-side logic, API routing, and real-time updates with Socket.IO.",
      icon: <FaNodeJs className="text-green-400" size={48} />,
      details: [
        "Server setup & routing",
        "REST API logic",
        "Real-time notifications",
        "Payment integration",
      ],
    },
    tailwindcss: {
      title: "Tailwind CSS",
      description:
        "Styled responsive interfaces for projects quickly, ensuring consistent branding and modern layouts.",
      icon: <RiTailwindCssFill className="text-teal-400" size={48} />,
      details: [
        "Responsive product pages",
        "Custom component styling",
        "Dark mode support",
        "Utility-first rapid styling",
      ],
    },
    git: {
      title: "Git",
      description:
        "Managed version control, collaborated on features, and maintained clean commit histories for personal and collaborative projects.",
      icon: <FaGitAlt className="text-orange-500" size={48} />,
      details: [
        "Branching for features",
        "Merging & resolving conflicts",
        "Version history tracking",
        "Pull requests & reviews",
      ],
    },
    vscode: {
      title: "VS Code",
      description:
        "Primary editor for coding MERN projects, leveraging extensions for productivity and debugging.",
      icon: <VscVscode className="text-blue-400" size={48} />,
      details: [
        "Integrated terminal",
        "Extensions for linting & debugging",
        "Git integration",
        "Code snippets & IntelliSense",
      ],
    },
    postman: {
      title: "Postman",
      description:
        "Tested and documented APIs for MERN applications to ensure correctness and ease of integration.",
      icon: <SiPostman className="text-orange-400" size={48} />,
      details: [
        "API request testing",
        "Environment setups",
        "Collections for endpoints",
        "Automated test scripts",
      ],
    },
    sql: {
      title: "SQL",
      description:
        "Handled relational data for projects that required structured reporting or analytics alongside NoSQL databases.",
      icon: <BsFiletypeSql className="text-blue-500" size={48} />,
      details: [
        "User & order reports",
        "Join queries for analytics",
        "Data validation & constraints",
        "Temporary tables & views",
      ],
    },
  };

  const featuredProjects = [
    {
      title: "Xirion-Africa (E-Commerce Platform)",
      desc: "Full-stack MERN store with user authentication, product catalog, and M-Pesa payments.",
    },
    {
      title: "Tiketa - Online Ticket Selling Platform",
      desc: "MERN powered, integrated with real-time availability updates and mobile payments.",
    },
  ];

  return (
    <section id="skills" className="px-4 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center">
          <h1 className="mb-8 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-nyuki-honey to-nyuki-gold">
            Skills & Tools
          </h1>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(skills).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSkill(key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeSkill === key
                  ? "bg-gradient-to-r from-nyuki-honey to-nyuki-gold text-nyuki-black"
                  : "bg-nyuki-black/60 border border-nyuki-stripe/30 hover:bg-nyuki-stripe/20 text-gray-300"
              }`}
            >
              {skills[key].title}
            </button>
          ))}
        </div>

        <div className="p-8 transition border border-nyuki-stripe/30 shadow-md bg-nyuki-black/70 backdrop-blur rounded-xl hover:border-nyuki-honey">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-shrink-0">{skills[activeSkill].icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-nyuki-wax">
                {skills[activeSkill].title}
              </h2>
              <p className="mt-2 text-gray-400">
                {skills[activeSkill].description}
              </p>
              <h3 className="mt-6 mb-3 font-semibold text-nyuki-gold">
                Key Achievements
              </h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {skills[activeSkill].details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-nyuki-honey rounded-full" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="mb-6 font-semibold text-nyuki-gold">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {featuredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-6 transition bg-nyuki-black/60 border border-nyuki-stripe/30 rounded-lg hover:border-nyuki-honey group"
                >
                  <h4 className="mb-2 text-lg font-semibold text-nyuki-wax">
                    {project.title}
                  </h4>
                  <p className="mb-3 text-sm text-gray-400">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-nyuki-stripe">
                      View Project
                    </span>
                    <FaExternalLinkAlt className="h-4 w-4 text-nyuki-gold group-hover:translate-x-1 transition" />
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
