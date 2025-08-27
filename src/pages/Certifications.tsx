import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack Course",
      organization: "QSpiders",
      type: "Professional Course",
      status: "Completed",
      description: "Comprehensive full-stack development course covering Java backend, frontend technologies, and database management.",
      skills: ["Java", "Spring Boot", "HTML/CSS", "JavaScript", "MySQL"],
      color: "primary",
      featured: true
    },
    {
      title: "Joy Of Python",
      organization: "NPTEL",
      type: "Online Course",
      status: "Completed",
      grade: "81%",
      description: "Advanced Python programming course covering data structures, algorithms, and application development.",
      skills: ["Python", "Data Structures", "Algorithms", "Programming Logic"],
      color: "secondary",
      featured: true
    },
    {
      title: "Java: Understanding the Fundamentals",
      organization: "Scaler",
      type: "Online Course", 
      status: "Completed",
      description: "Deep dive into Java fundamentals, OOP concepts, and advanced programming techniques.",
      skills: ["Java", "OOP", "Design Patterns", "Core Java"],
      color: "accent"
    },
    {
      title: "JavaScript Essentials",
      organization: "Scaler",
      type: "Online Course",
      status: "Completed", 
      description: "Modern JavaScript development including ES6+ features, async programming, and DOM manipulation.",
      skills: ["JavaScript", "ES6+", "Async/Await", "DOM"],
      color: "primary"
    },
    {
      title: "SQL using MySQL",
      organization: "Scaler", 
      type: "Online Course",
      status: "Completed",
      description: "Database design, complex queries, optimization, and advanced MySQL concepts.",
      skills: ["MySQL", "SQL Queries", "Database Design", "Optimization"],
      color: "secondary"
    },
    {
      title: "Node.js Development",
      organization: "Scaler",
      type: "Online Course",
      status: "Completed",
      description: "Server-side development with Node.js, Express framework, and API development.",
      skills: ["Node.js", "Express", "REST APIs", "Server Development"],
      color: "accent"
    },
    {
      title: "React.js Development",
      organization: "Scaler",
      type: "Online Course",
      status: "Completed",
      description: "Modern React development including hooks, state management, and component architecture.",
      skills: ["React.js", "Hooks", "State Management", "Component Design"],
      color: "primary"
    }
  ];

  const achievements = [
    {
      title: "Project Expo (M.A.I.D)",
      type: "Certificate of Appreciation",
      description: "Recognition for innovative Arduino-based cleaning robot project showcasing embedded systems expertise.",
      date: "2022"
    },
    {
      title: "International Conference on Intelligent Computing (IConIC)",
      type: "Participation Certificate",
      description: "PECTEAM 2K23 - Presented research and participated in technical discussions on intelligent computing.",
      date: "2023"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary text-primary bg-primary/5';
      case 'secondary':
        return 'border-secondary text-secondary bg-secondary/5';
      case 'accent':
        return 'border-accent text-accent bg-accent/5';
      default:
        return 'border-primary text-primary bg-primary/5';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'text-success' : 'text-warning';
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-tech-gradient">Achievements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and recognitions that validate my technical expertise
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Star className="w-6 h-6 text-accent mr-2" />
            Featured Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.filter(cert => cert.featured).map((cert, index) => (
              <div 
                key={index}
                className="card-tech card-glow group hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg border ${getColorClasses(cert.color)}`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)} bg-surface-elevated border border-card-border`}>
                      {cert.status}
                    </span>
                    {cert.grade && (
                      <div className="text-sm font-semibold text-primary mt-1">
                        Grade: {cert.grade}
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-glow transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-2">{cert.organization}</p>
                <p className="text-sm text-accent mb-4">{cert.type}</p>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-surface-elevated border border-card-border rounded-full text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">All Certifications</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="card-tech group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg border ${getColorClasses(cert.color)}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)} bg-surface-elevated border border-card-border`}>
                    {cert.status}
                  </span>
                </div>
                
                <h3 className="font-bold mb-1 group-hover:text-glow transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.organization}</p>
                {cert.grade && (
                  <p className="text-sm font-semibold text-primary mb-2">Grade: {cert.grade}</p>
                )}
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-surface-elevated rounded text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-surface-elevated rounded text-xs text-accent">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-8">Recognition & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="card-tech card-glow group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg border border-accent text-accent bg-accent/5 mr-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold group-hover:text-glow transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-accent font-semibold">{achievement.type}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          <div className="card-tech text-center">
            <div className="text-3xl font-bold text-primary mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="card-tech text-center">
            <div className="text-3xl font-bold text-secondary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </div>
          <div className="card-tech text-center">
            <div className="text-3xl font-bold text-accent mb-2">81%</div>
            <div className="text-sm text-muted-foreground">Highest Grade</div>
          </div>
          <div className="card-tech text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;