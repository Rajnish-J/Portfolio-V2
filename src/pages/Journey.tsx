import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Baby, GraduationCap, Code, Award, Briefcase, Target } from 'lucide-react';

const Journey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const journeySteps = [
    {
      id: 0,
      year: "Early Years",
      title: "The Curious Child",
      icon: <Baby className="w-8 h-8" />,
      description: "Every great developer starts with curiosity. From dismantling toys to understand how they work to asking endless 'why' questions, the foundation of logical thinking was being built.",
      character: "👶",
      background: "A young mind discovering the world through exploration and wonder.",
      milestone: "First glimpse of technology"
    },
    {
      id: 1,
      year: "2016-2018",
      title: "Academic Foundation",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Strong academic performance in SSLC (86.6%) laid the groundwork. Mathematics became a favorite subject, unknowingly preparing for the logical thinking required in programming.",
      character: "🎓",
      background: "Building analytical thinking and problem-solving skills through mathematics and science.",
      milestone: "NMMS Scholarship Selection & Ullas Young Achiever Recognition"
    },
    {
      id: 2,
      year: "2018-2020",
      title: "Higher Secondary Exploration",
      icon: <Award className="w-8 h-8" />,
      description: "Choosing the science stream with computer science as an elective opened the first door to programming. Initial exposure to basic programming concepts sparked genuine interest.",
      character: "💻",
      background: "First encounter with programming logic and computer science fundamentals.",
      milestone: "HSC Completion & Computer Science Discovery"
    },
    {
      id: 3,
      year: "2020-2022",
      title: "Engineering Beginnings",
      icon: <Code className="w-8 h-8" />,
      description: "Starting B.E. in ECE at Panimalar Engineering College. The blend of electronics and programming created a unique perspective. Mathematics and logical thinking skills strengthened significantly.",
      character: "⚡",
      background: "Learning the fundamentals of electronics while discovering the power of programming.",
      milestone: "M.A.I.D Robot Project - First major technical project"
    },
    {
      id: 4,
      year: "2022-2023",
      title: "The Programming Awakening",
      icon: <Code className="w-8 h-8" />,
      description: "Discovered competitive programming on CodeChef. The addiction began! Solving problems became a daily ritual, building strong logical thinking and algorithmic skills.",
      character: "🧩",
      background: "250+ days of consistent practice, solving 1000+ problems, and falling in love with code.",
      milestone: "Consistent coding practice begins"
    },
    {
      id: 5,
      year: "2023-2024",
      title: "Full Stack Evolution",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Java Full Stack course at QSpiders transformed theoretical knowledge into practical skills. React.js, Spring Boot, and database management became second nature. Real projects started taking shape.",
      character: "🚀",
      background: "Building complete web applications and understanding the full development lifecycle.",
      milestone: "Hospital Management System & Portfolio Development"
    },
    {
      id: 6,
      year: "2024-Present",
      title: "Professional Ready",
      icon: <Target className="w-8 h-8" />,
      description: "CGPA of 8.78, multiple certifications, and a portfolio of projects. Leadership roles in college events. Ready to contribute to the tech industry and build innovative solutions.",
      character: "👨‍💻",
      background: "A well-rounded developer ready to make an impact in the professional world.",
      milestone: "Graduation & Career Launch"
    }
  ];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => 
          prev < journeySteps.length - 1 ? prev + 1 : 0
        );
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, journeySteps.length]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setIsPlaying(false);
  };

  const currentJourney = journeySteps[currentStep];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-tech-gradient">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The story of how a curious child evolved into a passionate developer
          </p>
        </div>

        {/* Story Controls */}
        <div className="flex justify-center mb-12 space-x-4 animate-fade-in">
          <button
            onClick={handlePlayPause}
            className="btn-tech flex items-center"
          >
            {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
            {isPlaying ? 'Pause' : 'Play'} Story
          </button>
          <button
            onClick={handleReset}
            className="btn-outline-tech flex items-center"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </button>
        </div>

        {/* Main Story Display */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-tech card-glow p-8 text-center animate-scale-in">
            {/* Character & Icon */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="text-6xl animate-float">
                {currentJourney.character}
              </div>
              <div className="p-4 rounded-full border border-primary text-primary bg-primary/10">
                {currentJourney.icon}
              </div>
            </div>

            {/* Year */}
            <div className="text-sm font-mono text-secondary mb-2">
              {currentJourney.year}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-4 text-glow">
              {currentJourney.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {currentJourney.description}
            </p>

            {/* Background Context */}
            <div className="bg-surface-elevated rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground italic">
                {currentJourney.background}
              </p>
            </div>

            {/* Milestone */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary text-primary rounded-full text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              {currentJourney.milestone}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Complete Journey Timeline</h3>
          
          {/* Timeline Navigation */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2"></div>
            
            {/* Journey Steps */}
            <div className="flex justify-between items-center relative">
              {journeySteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`group flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    currentStep === index ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  {/* Step Circle */}
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-3 transition-all duration-300 ${
                    currentStep === index 
                      ? 'border-primary bg-primary text-primary-foreground shadow-[var(--glow-primary)]' 
                      : currentStep > index
                      ? 'border-secondary bg-secondary text-secondary-foreground'
                      : 'border-muted bg-background text-muted-foreground hover:border-primary'
                  }`}>
                    {React.cloneElement(step.icon, { className: 'w-6 h-6' })}
                  </div>
                  
                  {/* Step Info */}
                  <div className="text-center">
                    <div className="text-xs font-mono text-muted-foreground mb-1">
                      {step.year}
                    </div>
                    <div className={`text-sm font-medium transition-colors duration-300 ${
                      currentStep === index ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{currentStep + 1} / {journeySteps.length}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / journeySteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card-tech max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-tech-gradient">
              Ready for the Next Chapter
            </h3>
            <p className="text-muted-foreground mb-6">
              This journey has prepared me for exciting challenges ahead. 
              Let's build something amazing together and create the next chapter in this story!
            </p>
            <a 
              href="/contact" 
              className="btn-tech inline-flex items-center"
            >
              Start Our Journey Together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;