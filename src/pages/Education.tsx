import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.E. in Electronics and Communication Engineering",
      institution: "Panimalar Engineering College",
      location: "Chennai",
      duration: "2020 - 2024",
      grade: "CGPA: 8.78",
      description: "Specialized in electronics, communication systems, and embedded programming. Gained strong foundation in mathematical concepts and problem-solving methodologies.",
      highlights: [
        "Dean's List for Academic Excellence",
        "Active member of IETE student chapter",
        "Department Head of Institution of Electronics and Telecommunication Engineers",
        "Led symposium events and technical competitions"
      ],
      color: "primary"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "P.A.K. Palanisamy Higher Secondary School",
      location: "Chennai",
      duration: "2020",
      grade: "Percentage: 68.3%",
      description: "Focused on Science stream with Mathematics, Physics, Chemistry, and Computer Science. Developed analytical thinking and scientific approach to problem-solving.",
      highlights: [
        "Science stream specialization",
        "Computer Science elective",
        "Mathematics Olympiad participant"
      ],
      color: "secondary"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "P.A.K. Palanisamy Higher Secondary School", 
      location: "Chennai",
      duration: "2018",
      grade: "Percentage: 86.6%",
      description: "Completed foundational education with strong performance across all subjects. Developed discipline and time management skills.",
      highlights: [
        "Excellent academic performance",
        "Active in extracurricular activities",
        "Student council member"
      ],
      color: "accent"
    }
  ];

  const achievements = [
    {
      title: "Ullas Young Achiever",
      organization: "Polaris",
      period: "2016 - 2020",
      description: "Recognized for outstanding potential and continuous excellence in academics and extracurricular activities."
    },
    {
      title: "NMMS Examination",
      organization: "Government of India",
      period: "2016",
      description: "Selected in National Means-cum-Merit Scholarship examination, demonstrating academic merit and potential."
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary text-primary';
      case 'secondary':
        return 'border-secondary text-secondary';
      case 'accent':
        return 'border-accent text-accent';
      default:
        return 'border-primary text-primary';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="text-tech-gradient">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic foundation and the milestones that shaped my technical expertise
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 ${getColorClasses(edu.color)} bg-background z-10`}>
                <div className={`w-2 h-2 rounded-full ${edu.color === 'primary' ? 'bg-primary' : edu.color === 'secondary' ? 'bg-secondary' : 'bg-accent'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                <div className="card-tech card-glow group hover:scale-105 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg border ${getColorClasses(edu.color)} bg-surface-elevated`}>
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Degree Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-glow transition-all duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                  <div className={`text-lg font-semibold mb-4 ${getColorClasses(edu.color)}`}>
                    {edu.grade}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Key Highlights:</h4>
                    {edu.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">
            Academic <span className="text-tech-gradient">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="card-tech card-glow group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg border border-accent text-accent bg-surface-elevated mr-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-glow transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">{achievement.organization}</p>
                    <p className="text-sm text-accent font-semibold">{achievement.period}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;