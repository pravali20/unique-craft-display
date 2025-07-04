import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Lane Line Detection",
      description: "A Flask-based app using YOLOv8 and OpenCV for object and lane detection in driving videos.",
      tech: [Python, Flask, YOLOv8 (Ultralytics), OpenCV, HTML, NumPy],
      image: "🚗",
      color: "from-blue-500 to-cyan-500",
    
    },
    {
      title: "Interactive elearning Module",
      description: "Developed animated countdowns,quiz assessments with scoring, and feedback systems.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "💻",
      color: "from-purple-500 to-pink-500",
      
    },
    {
      title: "AI Portfolio Website",
      description: "A modern personal portfolio built using React, Tailwind, and Framer Motion to showcase AI skills.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "🌐",
      color: "from-green-500 to-teal-500",
      
    },
    
    {
      title: "Accelerating Drug Discovery",
      description: "A generative AI project built during a 24-hour hackathon using Flask and OpenAI APIs.",
      tech: ["Python", "Flask", "OpenAI API", "HTML/CSS"],
      image: "🧬",
      color: "from-indigo-500 to-purple-500",
     
    },
   
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
