import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/pravali20", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pravalika-koneti-8a4763284", label: "LinkedIn" },
  
  ];

  return (
    <div className="flex items-center justify-center space-x-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            asChild
            className="w-12 h-12 rounded-full glass-card hover:glow-primary hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
