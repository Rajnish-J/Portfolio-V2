import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
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
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-20 w-6 h-6 border border-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;