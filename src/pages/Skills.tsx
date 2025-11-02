import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Wrench, 
  Brain, 
  Users,
  Coffee,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Zap,
  Settings,
  Lightbulb,
  Target,
  Clock
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "primary",
      skills: [
        { name: "Java", icon: <Coffee className="w-5 h-5" /> },
        { name: "JavaScript", icon: <Code className="w-5 h-5" /> },
        { name: "TypeScript", icon: <Code className="w-5 h-5" /> },
        { name: "Python", icon: <Code className="w-5 h-5" /> },
        { name: "Go", icon: <Zap className="w-5 h-5" /> }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Technologies",
      color: "secondary",
      skills: [
        { name: "React.js", icon: <Smartphone className="w-5 h-5" /> },
        { name: "HTML/CSS", icon: <Palette className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" /> },
        { name: "Material UI", icon: <Palette className="w-5 h-5" /> },
        { name: "Bootstrap", icon: <Palette className="w-5 h-5" /> }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      color: "accent",
      skills: [
        { name: "Node.js", icon: <Server className="w-5 h-5" /> },
        { name: "Spring Boot", icon: <Coffee className="w-5 h-5" /> },
        { name: "REST APIs", icon: <Server className="w-5 h-5" /> },
        { name: "MySQL", icon: <Database className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Technologies",
      color: "primary",
      skills: [
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "VS Code", icon: <Settings className="w-5 h-5" /> },
        { name: "Postman", icon: <Settings className="w-5 h-5" /> },
        { name: "IntelliJ IDEA", icon: <Settings className="w-5 h-5" /> },
        { name: "MySQL Workbench", icon: <Settings className="w-5 h-5" /> }
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Core Concepts",
      color: "secondary",
      skills: [
        { name: "Data Structures", icon: <Brain className="w-5 h-5" /> },
        { name: "Algorithms", icon: <Brain className="w-5 h-5" /> },
        { name: "OOP", icon: <Code className="w-5 h-5" /> },
        { name: "JDBC", icon: <Database className="w-5 h-5" /> },
        { name: "JPA", icon: <Database className="w-5 h-5" /> }
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      color: "accent",
      skills: [
        { name: "Leadership", icon: <Target className="w-5 h-5" /> },
        { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> },
        { name: "Time Management", icon: <Clock className="w-5 h-5" /> },
        { name: "Event Management", icon: <Users className="w-5 h-5" /> },
        { name: "Team Collaboration", icon: <Users className="w-5 h-5" /> }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary border-primary hover:bg-primary/10';
      case 'secondary':
        return 'text-secondary border-secondary hover:bg-secondary/10';
      case 'accent':
        return 'text-accent border-accent hover:bg-accent/10';
      default:
        return 'text-primary border-primary hover:bg-primary/10';
    }
  };

  const getGlowClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'hover:shadow-[var(--glow-primary)]';
      case 'secondary':
        return 'hover:shadow-[var(--glow-secondary)]';
      case 'accent':
        return 'hover:shadow-[var(--glow-accent)]';
      default:
        return 'hover:shadow-[var(--glow-primary)]';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-tech-gradient">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technology stack and expertise across different domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="card-tech animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg border ${getColorClasses(category.color)} bg-surface-elevated mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${getColorClasses(category.color)} ${getGlowClasses(category.color)} group cursor-pointer`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-tech animate-fade-in text-center">
            <div className="text-4xl font-bold text-primary mb-2">1050+</div>
            <div className="text-muted-foreground mb-2">Problems Solved</div>
            <div className="text-sm text-secondary">CodeChef Platform</div>
          </div>

          <div className="card-tech animate-fade-in text-center">
            <div className="text-4xl font-bold text-secondary mb-2">250+</div>
            <div className="text-muted-foreground mb-2">Days of Practice</div>
            <div className="text-sm text-accent">Consistent Learning</div>
          </div>

          <div className="card-tech animate-fade-in text-center">
            <div className="text-4xl font-bold text-accent mb-2">4+</div>
            <div className="text-muted-foreground mb-2">Major Projects</div>
            <div className="text-sm text-primary">Full Stack Development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;