import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  // Social links data array
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jimmindungu3",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jamesndunguthedev",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      url: "mailto:jimmindungu3@gmail.com",
      icon: FaEnvelope,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/ndunguthedev",
      icon: FaXTwitter,
    },
  ];

  return (
    <footer className="w-full px-4 py-4 text-white border-t border-nyuki-stripe/20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Icon
                  className="text-gray-300 hover:text-nyuki-gold transition-all transform hover:scale-110"
                  size={24}
                />
              </a>
            );
          })}
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm mb-4">
          Built with 🍯 by 🐝 | James Ng'ang'a Ndung'u | © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
