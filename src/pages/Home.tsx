import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Pravalika</span> —{" "}
              <span className="gradient-text">Engineering Student</span> &{" "}
              <span className="gradient-text">Developer</span>.
            </h1>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl glass-card p-1 glow-primary">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <img
                    src="/lovable-uploads/c24cb7aa-b8a1-49ee-8355-4e74311c6265.png"
                    alt="Pravalika Koneti"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up">
            <SocialLinks />
          </div>

          {/* Tagline */}
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center justify-center space-x-2 text-lg text-muted-foreground">
              <Rocket className="h-5 w-5 text-primary" />
              <span>Turning ideas into intuitive, useful experiences</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-slide-up">
            <Link to="/projects" className="glass-card p-6 rounded-2xl hover:scale-105 transition-all group">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                6+ Projects
              </h3>
              <p className="text-muted-foreground">
                Built with modern technologies
              </p>
            </Link>

            <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">Resume</h3>
              <p className="text-muted-foreground mb-4">
                Download my latest resume
              </p>
              <a
    href="/Pravalika Koneti Resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="sm" className="w-full">
      Download PDF
    </Button>
  </a>
</div>

            <Link to="/skills" className="glass-card p-6 rounded-2xl hover:scale-105 transition-all group">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                10+ Skills
              </h3>
              <p className="text-muted-foreground">
                Technologies I work with
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
