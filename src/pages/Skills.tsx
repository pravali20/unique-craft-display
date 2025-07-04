import { Code, Database, Wrench, Lightbulb } from "lucide-react";

interface SkillData {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillData[];
  color: string;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C", level: 85 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 65 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter Notebook", level: 80 },
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 70 },
      ]
    },
    {
      title: "Currently Learning",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React.js", level: 60 },
        { name: "Node.js", level: 50 },
        { name: "DevOps", level: 40 },
        { name: "Advanced ML", level: 55 },
        { name: "AWS Cloud Services", level: 40 },
      ]
    }
  ];

  const SkillBar = ({ skill, color }: { skill: SkillData; color: string }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-medium text-primary">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: `${skill.level}%`,
            animation: `progressFill 1.5s ease-out`
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Skills</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-8 rounded-2xl animate-slide-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} color={category.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Continuous Learning</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about staying up-to-date with the latest technologies and best practices. 
              Currently expanding my knowledge in modern web development frameworks, cloud technologies, 
              and advanced machine learning concepts. Always excited to take on new challenges and learn 
              emerging technologies that can help create better solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
