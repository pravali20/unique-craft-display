import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "🛒",
      color: "from-blue-500 to-cyan-500",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects with real-time collaboration features. Built using React and Firebase.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "📋",
      color: "from-purple-500 to-pink-500",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather and forecasts using OpenWeather API. Features location-based weather and beautiful visualizations.",
      tech: ["JavaScript", "API Integration", "CSS3"],
      image: "🌤️",
      color: "from-green-500 to-teal-500",
      github: "#",
      demo: "#"
    },
    {
      title: "ML Image Classifier",
      description: "A machine learning project that classifies images using Python and TensorFlow. Includes a web interface for easy image uploads and predictions.",
      tech: ["Python", "TensorFlow", "Flask", "ML"],
      image: "🤖",
      color: "from-orange-500 to-red-500",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and optimized for performance.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "💼",
      color: "from-indigo-500 to-purple-500",
      github: "#",
      demo: "#"
    },
    {
      title: "IoT Home Automation",
      description: "Smart home automation system using Arduino and IoT sensors. Controls lighting, temperature, and security systems through a mobile app.",
      tech: ["Arduino", "IoT", "Mobile App", "C++"],
      image: "🏠",
      color: "from-cyan-500 to-blue-500",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my skills and passion for creating innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl`}>
                  {project.image}
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" asChild className="hover:text-primary">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="hover:text-primary">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Want to Collaborate?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              I'm always excited to work on new projects and collaborate with like-minded developers. 
              Let's build something amazing together!
            </p>
            <Button className="glow-primary">
              <a href="mailto:your.email@example.com">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;