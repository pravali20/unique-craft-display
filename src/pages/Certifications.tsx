import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "2024",
      description: "Comprehensive course covering Python fundamentals, data manipulation with Pandas, and data visualization techniques.",
      skills: ["Python", "Pandas", "Data Analysis", "Matplotlib"],
      color: "from-blue-500 to-cyan-500",
      icon: "🐍",
      credentialUrl: "https://drive.google.com/file/d/1NpqEzvGV8Faw5BN-14iT7YSq3WyChzDD/view?usp=sharing"
    },
    {
      title: "Cisco Networking Essentials (M1, M2, M3)",
      issuer: "Cisco Networking Academy",
      date: "2024-2025",
      description: "Completed all three modules of Cisco's Networking Essentials course. Gained strong foundational knowledge in networking, including IP addressing, routing, LAN/WAN design, and troubleshooting.",
      skills: ["Networking", "IP Addressing", "Routing", "Subnetting", "LAN/WAN"],
      color: "from-blue-500 to-cyan-500",
      icon: "🌐",
      credentialUrl: "https://drive.google.com/drive/folders/10F2WWv53Z4B_bs-7wocnnhqsKFuIaIaG?usp=sharing",
      extraLinks: [
        {
          label: "Module 1 Certificate",
          url: "https://drive.google.com/file/d/1yPD6thEpmL3VN6LMCuYjHstEJG6kfIo1/view?usp=sharing"
        },
        {
          label: "Module 2 Certificate",
          url: "https://drive.google.com/file/d/14frdw-klJmk8vqj5PDAUZKPYzQp-Yh6l/view?usp=sharing"
        },
        {
          label: "Module 3 Certificate",
          url: "https://drive.google.com/file/d/1cmBNg8jg9T2e2FHUYwnsfsrxTqp9Bf1J/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Data Engineering",
      issuer: "AWS Academy",
      date: "2024",
      description: "Completed a 10-week virtual internship focused on building scalable data pipelines using AWS services.",
      skills: ["AWS S3", "Redshift", "Lambda", "Glue", "Data Pipelines"],
      color: "from-yellow-500 to-orange-500",
      icon: "☁️📊",
      credentialUrl: "https://drive.google.com/file/d/1hldLLLCyDXDWwcB4h5gq3XlaWC7Xxdod/view?usp=sharing"
    },
    {
      title: "Google Cybersecurity & AI Essentials",
      issuer: "Google",
      date: "2023-2025",
      description: "Completed a set of professional courses from Google via Coursera covering essential topics in cybersecurity, AI, and risk management.",
      skills: ["Cybersecurity", "AI Basics", "Risk Management", "Security Awareness"],
      color: "from-purple-500 to-pink-500",
      icon: "🔐",
      credentialUrl: "https://drive.google.com/drive/folders/1UtjVNBWe7ZSTBWMUCnusNVv5bXZjmwuT?usp=sharing",
      extraLinks: [
        {
          label: "Google AI Essentials (91%)",
          url: "https://drive.google.com/file/d/1U-KUlFau7vBa6U2xr0OBK-HHlC4ThnxO/view?usp=sharing"
        },
        {
          label: "Play It Safe: Manage Security Risks (89.90%)",
          url: "https://drive.google.com/file/d/1MCKzOBPgX5i0Untp4JqfM2tQHMqU8jGZ/view?usp=sharing"
        },
        {
          label: "Foundations of Cybersecurity (90.63%)",
          url: "https://drive.google.com/file/d/1xqhHG6yEfxJRF4BAUn1dugK-B07SLZe_/view?usp=sharing"
        }
      ]
    },
    {
      title: "Machine Learning with Python",
      issuer: "edX (IBM)",
      date: "2024",
      description: "Completed a beginner-level course on Machine Learning using Python and real-world datasets.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      color: "from-orange-500 to-red-500",
      icon: "🐍🤖",
      credentialUrl: "#"
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Google Cloud",
      date: "2024",
      description: "Completed an introductory course on Large Language Models (LLMs), learning how they work and how they are used in real-world AI applications.",
      skills: ["LLMs", "Natural Language Processing", "Prompting", "AI Basics"],
      color: "from-gray-600 to-gray-800",
      icon: "💬",
      credentialUrl: "https://drive.google.com/file/d/1VZqqPycJJF_1dFkdsphvQmUKtH7r0TTE/view?usp=sharing"
    },
    {
      title: "Frontend Development Certification",
      issuer: "Infosys Springboard",
      date: "2024",
      description: "Completed a course on frontend development covering the basics of HTML, CSS, and JavaScript. Learned how to create responsive and user-friendly web pages.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "from-pink-500 to-red-500",
      icon: "🖥️",
      credentialUrl: "https://drive.google.com/file/d/15t5cTeNbeKgWZkJZZyGvcD-FPCgNd4V_/view?usp=sharing"
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

                {/* Main Credential Button */}
                {cert.credentialUrl && (
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
                )}

                {/* Extra Certificate Links */}
                {cert.extraLinks && cert.extraLinks.length > 0 && (
                  <div className="mt-3 space-y-1">
                    {cert.extraLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-500 hover:underline"
                      >
                        📄 {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
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