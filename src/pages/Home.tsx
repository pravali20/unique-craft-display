
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50 animate-pulse-glow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12 py-12">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text-animated">Pravalika</span> —{" "}
                <span className="gradient-text">Engineering Student</span> &{" "}
                <span className="gradient-text">Developer</span>.
              </h1>
              
              {/* Floating decoration elements */}
              <div className="absolute -top-8 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -top-4 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-1/4 w-3 h-3 bg-accent rounded-full animate-ping opacity-40"></div>
            </div>

            {/* Animated tagline with typewriter effect */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center space-x-3 text-xl text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center animate-rotate-slow">
                  <Rocket className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">Turning ideas into intuitive, useful experiences</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
              <img
                src="/lovable-uploads/c24cb7aa-b8a1-49ee-8355-4e74311c6265.png"
                alt="Pravalika Koneti"
                className="w-full h-full object-contain scale-90"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <SocialLinks />
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Link 
              to="/projects" 
              className="glass-card-intense p-8 rounded-3xl hover-glow group transition-all duration-500"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                6+ Projects
              </h3>
              <p className="text-muted-foreground text-lg">
                Built with modern technologies and best practices
              </p>
              <div className="mt-4 w-full h-1 bg-gradient-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <div 
              className="glass-card-intense p-8 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 hover-glow group"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">📄</div>
              <h3 className="text-2xl font-bold mb-3">Resume</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Download my latest resume
              </p>
              <a
                href="/Pravalika Koneti Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full hover:bg-orange-500/20 hover:border-orange-400 transition-all duration-300">
                  Download PDF
                </Button>
              </a>
            </div>

            <Link 
              to="/skills" 
              className="glass-card-intense p-8 rounded-3xl hover-glow group transition-all duration-500"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                10+ Skills
              </h3>
              <p className="text-muted-foreground text-lg">
                Technologies I master and love working with
              </p>
              <div className="mt-4 w-full h-1 bg-gradient-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Call-to-action section */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="glass-card-intense p-8 rounded-3xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold gradient-text-animated mb-4">Let's Build Something Amazing Together</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to turn your ideas into reality? I'm always excited to work on innovative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="hover:scale-105 transition-transform duration-300 glow-primary">
                    Get In Touch
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
