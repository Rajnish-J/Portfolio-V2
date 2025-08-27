import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Star, Code, Database, Globe } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack Course",
      provider: "QSpiders",
      category: "Full Stack Development",
      date: "2024",
      status: "Completed",
      description: "Comprehensive course covering Java backend development, Spring Boot, and full-stack application development.",
      skills: ["Java", "Spring Boot", "REST APIs", "Full Stack"],
      icon: <Code className="w-6 h-6" />,
      color: "primary",
      featured: true
    },
    {
      title: "Joy Of Python",
      provider: "NPTEL",
      category: "Programming",
      date: "2023",
      status: "Completed",
      score: "81%",
      description: "Advanced Python programming concepts, data structures, and algorithmic thinking.",
      skills: ["Python", "Data Structures", "Algorithms"],
      icon: <Code className="w-6 h-6" />,
      color: "secondary"
    },
    {
      title: "Java: Understanding the Fundamentals",
      provider: "Scaler",
      category: "Programming",
      date: "2023",
      status: "Completed", 
      description: "Core Java concepts, OOP principles, and programming best practices.",
      skills: ["Java", "OOP", "Programming"],
      icon: <Code className="w-6 h-6" />,
      color: "accent"
    },
    {
      title: "JavaScript",
      provider: "Scaler",
      category: "Frontend Development",
      date: "2023",
      status: "Completed",
      description: "Modern JavaScript ES6+, DOM manipulation, and asynchronous programming.",
      skills: ["JavaScript", "ES6+", "DOM"],
      icon: <Globe className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "SQL using MySQL",
      provider: "Scaler",
      category: "Database",
      date: "2023",
      status: "Completed",
      description: "Database design, complex queries, and MySQL optimization techniques.",
      skills: ["SQL", "MySQL", "Database Design"],
      icon: <Database className="w-6 h-6" />,
      color: "secondary"
    },
    {
      title: "Node.js",
      provider: "Scaler",
      category: "Backend Development",
      date: "2023",
      status: "Completed",
      description: "Server-side JavaScript, Express.js, and building scalable backend applications.",
      skills: ["Node.js", "Express.js", "Backend"],
      icon: <Code className="w-6 h-6" />,
      color: "accent"
    },
    {
      title: "React.js",
      provider: "Scaler",
      category: "Frontend Development",
      date: "2023",
      status: "Completed",
      description: "Component-based architecture, state management, and modern React patterns.",
      skills: ["React.js", "Components", "State Management"],
      icon: <Globe className="w-6 h-6" />,
      color: "primary"
    }
  ];

  const conferences = [
    {
      title: "Project Expo (M.A.I.D)",
      type: "Certificate of Appreciation",
      date: "2022",
      description: "Recognition for innovative Arduino-based cleaning robot project presentation."
    },
    {
      title: "International Conference on Intelligent Computing (IConIC)",
      type: "PECTEAM 2K23",
      date: "2023",
      description: "Participated in technical conference on emerging computing technologies."
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full Stack Development':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Programming':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Frontend Development':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Backend Development':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Database':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-tech-gradient">Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning journey through professional courses and certifications
          </p>
        </div>

        {/* Featured Certification */}
        {certifications.filter(cert => cert.featured).map((cert, index) => (
          <div key={index} className="max-w-4xl mx-auto mb-12 animate-fade-in">
            <div className="card-tech card-glow p-8 group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-1 text-center">
                  <div className={`p-6 rounded-full border-2 ${getColorClasses(cert.color)} mx-auto mb-4 w-fit`}>
                    {cert.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getColorClasses(cert.color)}`}>
                    {cert.status}
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <div className={`inline-block px-3 py-1 rounded-full border text-xs font-medium mb-3 ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-glow transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-3">{cert.provider}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-surface-elevated border border-card-border rounded text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.filter(cert => !cert.featured).map((cert, index) => (
            <div 
              key={index}
              className="card-tech card-glow group hover:scale-[1.02] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg border ${getColorClasses(cert.color)}`}>
                  {cert.icon}
                </div>
                <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getCategoryColor(cert.category)}`}>
                  {cert.category}
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-glow transition-all duration-300">
                {cert.title}
              </h3>
              <p className="text-muted-foreground mb-1">{cert.provider}</p>
              {cert.score && (
                <p className="text-sm font-semibold text-secondary mb-3">Score: {cert.score}</p>
              )}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-surface-elevated border border-card-border rounded text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.date}
                </div>
                <div className="flex items-center text-secondary">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {cert.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conferences & Recognition */}
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">
            Conferences & <span className="text-tech-gradient">Recognition</span>
          </h2>
          
          <div className="space-y-4">
            {conferences.map((conf, index) => (
              <div 
                key={index}
                className="card-tech card-glow group hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="p-3 rounded-lg border border-accent text-accent bg-accent/5 mr-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold group-hover:text-glow transition-all duration-300">
                      {conf.title}
                    </h3>
                    <p className="text-accent font-medium">{conf.type}</p>
                    <p className="text-sm text-muted-foreground mb-2">{conf.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {conf.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;