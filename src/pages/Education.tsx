import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData, achievements } from '@/Data/education.data';
import { getColorClasses, getGradientClass } from '@/lib/utils/color.utils';

const Education = () => {

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="text-tech-gradient">Background</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey that built my foundation in technology and problem-solving
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="card-tech group hover:scale-[1.02] transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-4 gap-6 items-start">
                {/* Icon and Status */}
                <div className="md:col-span-1 flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full border-2 ${getColorClasses(edu.color)} mb-4`}>
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getColorClasses(edu.color)}`}>
                    {edu.status}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-glow transition-all duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-1">{edu.institution}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.duration}
                      </div>
                      <div className={`text-xl font-bold ${edu.color === 'primary' ? 'text-primary' : edu.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3">Key Highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${getGradientClass(edu.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-tech-gradient">Awards & Recognition</span>
          </h2>

          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card-tech group hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg border ${getColorClasses(achievement.color)} mr-4`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold group-hover:text-glow transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">{achievement.organization}</p>
                    <p className={`text-sm font-semibold ${achievement.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                      {achievement.period}
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

export default Education;