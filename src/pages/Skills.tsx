import React from "react";
import {
  Code,
  Database,
  Globe,
  Wrench,
  Brain,
  Users,
  Target,
  Clock,
  Lightbulb,
} from "lucide-react";

// Import images
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import JavaScript from "../assets/skills/js.png";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import ReactImg from "../assets/skills/react.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import Tailwind from "../assets/skills/tailwind.png";
import Es6 from "../assets/skills/es6.png";
import MaterialUI from "../assets/skills/mui.png";
import TypeScript from "../assets/skills/ts.svg";
import Node from "../assets/skills/node-js.png";
import SpringBoot from "../assets/skills/springboot.png";
import Rest from "../assets/skills/rest_api.png";
import fastapi from "../assets/skills/fastapi.png";
import mongodb from "../assets/skills/mongodb.png";
import Mysql from "../assets/skills/mysql.png";
import VScode from "../assets/skills/vscode.png";
import Intelij from "../assets/skills/intelij.png";
import GIT from "../assets/skills/git.png";
import Postman from "../assets/skills/postman.png";
import Eclipse from "../assets/skills/eclipse.png";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "primary",
      skills: [
        { name: "Java", image: java },
        { name: "JavaScript", image: JavaScript },
        { name: "TypeScript", image: TypeScript },
        { name: "Python", image: python },
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Technologies",
      color: "secondary",
      skills: [
        { name: "React.js", image: ReactImg },
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
        { name: "Tailwind CSS", image: Tailwind },
        { name: "Material UI", image: MaterialUI },
        { name: "Bootstrap", image: Bootstrap },
        { name: "EcmaScript6", image: Es6 },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      color: "accent",
      skills: [
        { name: "Node.js", image: Node },
        { name: "Spring Boot", image: SpringBoot },
        { name: "REST APIs", image: Rest },
        { name: "FastAPI", image: fastapi },
        { name: "MySQL", image: Mysql },
        { name: "MongoDB", image: mongodb },
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Technologies",
      color: "primary",
      skills: [
        { name: "Git", image: GIT },
        { name: "VS Code", image: VScode },
        { name: "Postman", image: Postman },
        { name: "IntelliJ IDEA", image: Intelij },
        { name: "Eclipse", image: Eclipse },
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Core Concepts",
      color: "secondary",
      skills: [
        { name: "Data Structures", icon: <Brain className="w-12 h-12" /> },
        { name: "OOP", icon: <Code className="w-12 h-12" /> },
        { name: "JDBC", icon: <Database className="w-12 h-12" /> },
        { name: "JPA", icon: <Database className="w-12 h-12" /> },
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      color: "accent",
      skills: [
        { name: "Leadership", icon: <Target className="w-12 h-12" /> },
        { name: "Problem Solving", icon: <Lightbulb className="w-12 h-12" /> },
        { name: "Time Management", icon: <Clock className="w-12 h-12" /> },
        { name: "Event Management", icon: <Users className="w-12 h-12" /> },
        { name: "Team Collaboration", icon: <Users className="w-12 h-12" /> },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary hover:border-primary";
      case "secondary":
        return "text-secondary hover:border-secondary";
      case "accent":
        return "text-accent hover:border-accent";
      default:
        return "text-primary hover:border-primary";
    }
  };

  const getGlowClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "hover:shadow-[var(--glow-primary)]";
      case "secondary":
        return "hover:shadow-[var(--glow-secondary)]";
      case "accent":
        return "hover:shadow-[var(--glow-accent)]";
      default:
        return "hover:shadow-[var(--glow-primary)]";
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
                <div
                  className={`p-3 rounded-lg border border-border ${getColorClasses(
                    category.color
                  )} bg-surface-elevated mr-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border transition-all duration-300 ${getColorClasses(
                      category.color
                    )} ${getGlowClasses(category.color)} group cursor-pointer`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {skill.image ? (
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <span className="font-medium text-sm truncate">
                      {skill.name}
                    </span>
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
