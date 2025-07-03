import { GraduationCap, MapPin, Calendar, User } from "lucide-react";

const About = () => {
  const educationData = [
    {
      period: "2022–Present",
      degree: "Artificial Intelligence and DataScience",
      institution: "Vignan's Institute of Information Technology, Duvvada",
      description: "Currently pursuing Bachelor of Engineering in AI&DS",
      color: "from-blue-500 to-cyan-500",
      icon: "🎓"
    },
    {
      period: "2020–2022",
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      description: "Completed Intermediate(MPC) with 97 %",
      color: "from-purple-500 to-pink-500",
      icon: "📚"
    },
    {
      period: "2019–2020",
      degree: "10th Grade (SSC)",
      institution: "Vasavi Bala Vihar English Medium School, Anakapalli",
      description: "Completed secondary Education with 99%",
      color: "from-green-500 to-teal-500",
      icon: "🏫"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know me better through my journey and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* My Journey Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold gradient-text">My Journey</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm <span className="text-primary font-semibold">Pravalika Koneti </span>, An enthusiastic engineering student, passionate coder, and creative thinker from Andhra Pradesh.

                  My journey into the world of technology began with curiosity — the urge to understand how things work. 
                  Over time, that curiosity evolved into a strong passion for building smart and meaningful solutions through code.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I specialize in <span className="text-primary font-semibold">web development</span> and have experience with 
                  various technologies including <span className="text-secondary font-semibold">Python</span>, <span className="text-accent font-semibold">JavaScript</span>, <span className="text-primary font-semibold">Firebase</span>, and 
                  emerging fields like <span className="text-secondary font-semibold">Machine Learning, </span> and <span className="text-accent font-semibold">IoT</span>.  I’m always eager to learn, experiment with new tools, and stay updated with emerging tech trends.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
               Professionally, I focus on growing as a developer by working on real-world projects, attending hackathons, collaborating with diverse teams,
                  and continuously improving my skills to contribute effectively to the tech industry. 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl font-bold gradient-text">Education Timeline</h2>
            </div>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-2xl`}>
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{item.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                      
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <p className="text-sm font-medium text-muted-foreground">{item.institution}</p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Personal Info Section */}
        <div className="mt-16 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold gradient-text mb-6 text-center">What Drives Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                  💡
                </div>
                <h4 className="text-lg font-semibold text-foreground">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Creating solutions that solve real-world problems through technology
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                  📚
                </div>
                <h4 className="text-lg font-semibold text-foreground">Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Constantly expanding my knowledge and staying updated with latest trends
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-2xl">
                  🤝
                </div>
                <h4 className="text-lg font-semibold text-foreground">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Working with teams to build amazing projects and share knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
