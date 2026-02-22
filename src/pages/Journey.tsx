import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { journeySteps } from '@/Data/journey.data';
import { getColorClasses, getGlowClass } from '@/lib/utils/color.utils';

const Journey = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % journeySteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  const currentJourney = journeySteps[currentStep];

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-background via-surface to-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary-glow rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 border border-secondary rounded-full animate-float" style={{ animationDelay: '1.5s' }} />

        {/* Animated path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M100 400 Q300 200 500 400 T900 400 Q1000 300 1100 400"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse opacity-30"
          />
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Progress Indicator */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-2">
              {journeySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full border transition-all duration-300 ${index === currentStep
                      ? `${getColorClasses(currentJourney.color)} scale-125`
                      : 'border-muted bg-muted/20'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Year Display */}
          <div className="mb-6 animate-fade-in">
            <div className={`inline-block px-6 py-2 rounded-full border-2 ${getColorClasses(currentJourney.color)} font-mono text-lg font-bold`}>
              {currentJourney.year}
            </div>
          </div>

          {/* Main Content Card */}
          <div className={`card-tech  mx-auto max-w-2xl p-8 transition-all duration-500 animate-scale-in ${getGlowClass(currentJourney.color)}`}>
            {/* Icon and Emoji */}
            <div className="flex justify-center items-center mb-6">
              <div className={`p-4 rounded-full border-2 ${getColorClasses(currentJourney.color)} mr-4`}>
                {currentJourney.icon}
              </div>
              <div className="text-6xl animate-bounce">
                {currentJourney.image}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              {currentJourney.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {currentJourney.description}
            </p>

            {/* Step Counter */}
            <div className="text-sm text-muted-foreground font-mono">
              Step {currentStep + 1} of {journeySteps.length}
            </div>
          </div>

          {/* Fun Elements */}
          <div className="mt-8 flex justify-center space-x-8 text-4xl">
            <div className="animate-float">🎯</div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>💡</div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>⚡</div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevStep}
        className="fixed left-6 bottom-6 p-4 rounded-full bg-surface-elevated border border-card-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 z-20"
        aria-label="Previous step"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextStep}
        className="fixed right-6 bottom-6 p-4 rounded-full bg-surface-elevated border border-card-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 z-20"
        aria-label="Next step"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-surface-elevated z-20">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500"
          style={{ width: `${((currentStep + 1) / journeySteps.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Journey;