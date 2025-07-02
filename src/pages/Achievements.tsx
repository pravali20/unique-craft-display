import { Trophy, Medal, Star, Target, Calendar, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Best Project Award",
      category: "Academic Excellence",
      date: "2023",
      description: "Awarded for outstanding final year project on Smart Home Automation using IoT and machine learning algorithms.",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      impact: "Project implemented in 5+ homes"
    },
    {
      title: "Hackathon Winner",
      category: "Competition",
      date: "2023",
      description: "First place in 48-hour hackathon for developing an AI-powered study companion app for students.",
      icon: Medal,
      color: "from-purple-500 to-pink-500",
      impact: "500+ students benefited"
    },
    {
      title: "Dean's List",
      category: "Academic Excellence",
      date: "2022-2023",
      description: "Maintained top 5% academic performance throughout the academic year with 9.2+ CGPA.",
      icon: Star,
      color: "from-blue-500 to-cyan-500",
      impact: "Top 5% of class"
    },
    {
      title: "Open Source Contributor",
      category: "Community",
      date: "2023",
      description: "Contributed to 10+ open source projects with 50+ merged pull requests and helped fix critical bugs.",
      icon: Target,
      color: "from-green-500 to-teal-500",
      impact: "50+ contributions"
    },
    {
      title: "Technical Blog Writer",
      category: "Knowledge Sharing",
      date: "2022-Present",
      description: "Published 15+ technical articles on web development and machine learning with 10K+ total views.",
      icon: Award,
      color: "from-indigo-500 to-purple-500",
      impact: "10K+ readers reached"
    },
    {
      title: "Coding Competition Champion",
      category: "Programming",
      date: "2023",
      description: "Won inter-college coding competition by solving complex algorithmic problems in record time.",
      icon: Trophy,
      color: "from-red-500 to-pink-500",
      impact: "Competed against 200+ participants"
    },
    {
      title: "Innovation Excellence Award",
      category: "Innovation",
      date: "2023",
      description: "Recognized for developing innovative solutions in machine learning and IoT applications.",
      icon: Star,
      color: "from-cyan-500 to-blue-500",
      impact: "Recognized by industry experts"
    },
    {
      title: "Community Mentor",
      category: "Leadership",
      date: "2022-Present",
      description: "Mentored 25+ junior students in programming and helped them secure internships at top companies.",
      icon: Award,
      color: "from-orange-500 to-red-500",
      impact: "25+ students mentored"
    }
  ];

  const stats = [
    { label: "Awards Won", value: "8+", icon: Trophy },
    { label: "Students Mentored", value: "25+", icon: Target },
    { label: "Projects Completed", value: "15+", icon: Star },
    { label: "Recognition Years", value: "3+", icon: Medal }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones, awards, and recognitions that mark my journey of growth and excellence
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all">
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Achievement Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">{achievement.category}</div>
                    <div className="flex items-center space-x-2 text-sm text-primary">
                      <Calendar className="h-3 w-3" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                </div>

                {/* Achievement Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <Star className="h-3 w-3 mr-1" />
                    {achievement.impact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recognition Timeline */}
        <div className="mt-16 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Recognition Timeline</h3>
            <div className="space-y-6">
              {[
                { year: "2023", achievements: ["Best Project Award", "Hackathon Winner", "Innovation Excellence"] },
                { year: "2022", achievements: ["Dean's List", "Technical Blog Writer", "Community Mentor"] },
                { year: "2021", achievements: ["Academic Excellence", "First Programming Contest"] }
              ].map((yearData, index) => (
                <div key={yearData.year} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {yearData.year}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {yearData.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-3 py-1 text-xs font-medium bg-muted/20 text-foreground rounded-full border border-border"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Looking Ahead</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every achievement represents a step forward in my journey. I'm committed to pushing boundaries, 
              solving complex problems, and making a positive impact through technology. The goal is not just 
              personal success, but contributing to the broader tech community and society.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-2xl">🎯</div>
                <h4 className="font-semibold text-foreground">Next Goal</h4>
                <p className="text-sm text-muted-foreground">Contributing to major open source projects</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🚀</div>
                <h4 className="font-semibold text-foreground">Dream Project</h4>
                <p className="text-sm text-muted-foreground">Building AI solutions for social impact</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🌟</div>
                <h4 className="font-semibold text-foreground">Vision</h4>
                <p className="text-sm text-muted-foreground">Empowering others through technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;