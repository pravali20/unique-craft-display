import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "Coursera - IBM",
      date: "2023",
      description: "Comprehensive course covering Python fundamentals, data manipulation with Pandas, and data visualization techniques.",
      skills: ["Python", "Pandas", "Data Analysis", "Matplotlib"],
      color: "from-blue-500 to-cyan-500",
      icon: "🐍",
      credentialUrl: "#"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Completed 300+ hours of coursework covering ES6, regular expressions, debugging, data structures, and algorithm scripting.",
      skills: ["JavaScript", "ES6", "Algorithms", "Data Structures"],
      color: "from-yellow-500 to-orange-500",
      icon: "⚡",
      credentialUrl: "#"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      description: "Learned to create responsive web pages using HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.",
      skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
      color: "from-purple-500 to-pink-500",
      icon: "🎨",
      credentialUrl: "#"
    },
    {
      title: "Firebase Fundamentals",
      issuer: "Google Cloud",
      date: "2023",
      description: "Comprehensive training on Firebase services including Authentication, Firestore, Cloud Functions, and Hosting.",
      skills: ["Firebase", "Cloud Functions", "Firestore", "Authentication"],
      color: "from-orange-500 to-red-500",
      icon: "🔥",
      credentialUrl: "#"
    },
    {
      title: "Git and GitHub Essentials",
      issuer: "GitHub Learning Lab",
      date: "2022",
      description: "Mastered version control workflows, collaboration techniques, and best practices for software development.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      color: "from-gray-600 to-gray-800",
      icon: "🐙",
      credentialUrl: "#"
    },
    {
      title: "Machine Learning Basics",
      issuer: "Coursera - Stanford",
      date: "2023",
      description: "Introduction to machine learning concepts, supervised and unsupervised learning, and practical implementation.",
      skills: ["Machine Learning", "Python", "Scikit-learn", "TensorFlow"],
      color: "from-green-500 to-teal-500",
      icon: "🤖",
      credentialUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and courses that showcase my commitment to continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certification Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl`}>
                  {cert.icon}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Certification Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential Link */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group hover:glow-primary"
                  asChild
                >
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <Award className="h-4 w-4 mr-2" />
                    View Credential
                    <ExternalLink className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <p className="text-sm text-muted-foreground">Certifications Earned</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <p className="text-sm text-muted-foreground">Hours of Learning</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <p className="text-sm text-muted-foreground">Skills Mastered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Learning Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of continuous learning and staying updated with the latest technologies. 
              Each certification represents not just knowledge gained, but also the dedication to excellence 
              and the pursuit of becoming a better developer. I'm constantly exploring new courses and 
              certifications to expand my skill set and stay ahead in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;