import React from 'react';
import { Code, Database, Globe, Wrench, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "primary",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "Go", level: 70 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Technologies",
      color: "secondary",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI", level: 80 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      color: "accent",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Spring Boot", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Technologies",
      color: "primary",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 85 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "MySQL Workbench", level: 80 }
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Core Concepts",
      color: "secondary",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "OOP", level: 90 },
        { name: "JDBC", level: 85 },
        { name: "JPA", level: 80 }
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      color: "accent",
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Event Management", level: 80 },
        { name: "Team Collaboration", level: 85 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary border-primary';
      case 'secondary':
        return 'text-secondary border-secondary';
      case 'accent':
        return 'text-accent border-accent';
      default:
        return 'text-primary border-primary';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'accent':
        return 'bg-accent';
      default:
        return 'bg-primary';
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
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="card-tech card-glow animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg border ${getColorClasses(category.color)} bg-surface-elevated mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(category.color)}`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card-tech animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-primary">Problem Solving</h3>
            <p className="text-muted-foreground mb-4">
              Completed <span className="text-primary font-semibold">1050+ problems</span> on CodeChef 
              with <span className="text-secondary font-semibold">250+ days</span> of consistent practice.
            </p>
            <div className="font-mono text-sm text-accent">
              rank: competitive_programmer++
            </div>
          </div>

          <div className="card-tech animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Currently Learning</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                <span className="text-muted-foreground">Advanced React Patterns</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse" />
                <span className="text-muted-foreground">Microservices Architecture</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse" />
                <span className="text-muted-foreground">Cloud Technologies (AWS)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;