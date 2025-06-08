import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/jimmindungu3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jamesndunguthedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110"
              size={24}
            />
          </a>
          <a
            href="mailto:jimmindungu3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope
              className="text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110"
              size={24}
            />
          </a>
          <a
            href="https://x.com/ndunguthedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              className="text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110"
              size={24}
            />
          </a>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Built with ❤️ | James Ng'ang'a Ndung'u | © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
