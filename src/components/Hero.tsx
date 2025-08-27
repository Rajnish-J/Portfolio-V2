import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, BarChart3 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import heroImage from '@/assets/hero-tech.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const stats = [
    { platform: "CodeChef", solved: "1050+", days: "250+", level: "3 Star" },
    { platform: "LeetCode", solved: "150+", level: "Knight" },
    { platform: "HackerRank", solved: "200+", level: "Gold Badge" },
    { platform: "GeeksforGeeks", solved: "300+", level: "Expert" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-20 w-6 h-6 border border-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-5 h-5 border border-accent rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <div className="font-mono text-secondary mb-4">
            <span className="text-lg">Hello, World! I'm</span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-tech-gradient">Rajnish J</span>
          </h1>
          
          {/* Animated Role */}
          <div className="text-2xl md:text-3xl font-medium mb-4 h-12 flex items-center justify-center">
            <span className="font-mono">
              {text}
              {showCursor && <span className="text-primary">|</span>}
            </span>
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center text-muted-foreground mb-8">
            <MapPin size={16} className="mr-2" />
            <span>Chennai, Tamil Nadu</span>
          </div>
          
          {/* Bio */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Driven IT professional skilled in Java, JavaScript, and modern web technologies. 
            Passionate about creating innovative software solutions and building impactful digital experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#contact" 
              className="btn-tech inline-flex items-center justify-center"
            >
              <Mail size={18} className="mr-2" />
              Get In Touch
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <button className="btn-outline-tech inline-flex items-center justify-center">
                  <BarChart3 size={18} className="mr-2" />
                  Coding Stats
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-surface border-card-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-tech-gradient">Coding Statistics</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="card-tech">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-primary">{stat.platform}</h3>
                          <p className="text-sm text-muted-foreground">Level: {stat.level}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-secondary">{stat.solved}</div>
                          <div className="text-xs text-muted-foreground">Problems Solved</div>
                          {stat.days && (
                            <div className="text-xs text-accent">{stat.days} days active</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="btn-outline-tech inline-flex items-center justify-center"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://github.com/Rajnish-J" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface-elevated border border-card-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajnish-j-a749bb248" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface-elevated border border-card-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:rajnishofficial02@gmail.com"
              className="p-3 rounded-lg bg-surface-elevated border border-card-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[var(--glow-primary)] transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;