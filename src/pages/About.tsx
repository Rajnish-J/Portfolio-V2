import React from 'react';
import { Target, Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions that meet client requirements and exceed expectations."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Committed to writing clean, maintainable code and staying updated with the latest technologies."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about solving complex problems and finding innovative solutions to technical challenges."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Strong leadership and collaboration skills with experience in event management and team coordination."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-tech-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer on a mission to create innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-glow">Career Objective</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                As a driven IT professional, I bring a unique combination of technical expertise 
                and creative problem-solving to every project. My journey in software development 
                has been fueled by an insatiable curiosity for emerging technologies and a 
                commitment to continuous learning.
              </p>
              <p className="text-muted-foreground">
                With a strong foundation in <span className="text-primary font-semibold">Java</span>, 
                <span className="text-secondary font-semibold"> JavaScript</span>, and modern web frameworks, 
                I specialize in creating full-stack applications that not only meet functional 
                requirements but also deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground">
                My goal is to work in a dynamic environment where I can contribute to impactful 
                software solutions while learning from experienced professionals and growing 
                both technically and personally.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="card-tech text-center">
                <div className="text-3xl font-bold text-primary mb-2">1050+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="card-tech text-center">
                <div className="text-3xl font-bold text-secondary mb-2">250+</div>
                <div className="text-sm text-muted-foreground">Days of Practice</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-tech card-glow group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="card-tech max-w-4xl mx-auto text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-tech-gradient">Development Philosophy</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "Code is not just about solving problems—it's about crafting elegant solutions 
            that stand the test of time. Every line of code should tell a story, and every 
            application should make someone's life a little bit better."
          </p>
          <div className="mt-6 text-primary font-mono text-sm">
            console.log("Building the future, one commit at a time 🚀");
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;