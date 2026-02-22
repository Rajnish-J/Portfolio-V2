import { Award, Calendar, CheckCircle, Star } from "lucide-react";
import { certifications, conferences } from "@/Data/certifications.data";
import { getColorClasses, getCategoryColor } from "@/lib/utils/color.utils";

const Certifications = () => {

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications &{" "}
            <span className="text-tech-gradient">Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning journey through professional courses and
            certifications
          </p>
        </div>

        {/* Featured Certification */}
        {certifications
          .filter((cert) => cert.featured)
          .map((cert, index) => (
            <div
              key={index}
              className="max-w-4xl mx-auto mb-12 animate-fade-in"
            >
              <div className="card-tech  p-8 group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-1 text-center">
                    <div
                      className={`p-6 rounded-full border-2 ${getColorClasses(
                        cert.color
                      )} mx-auto mb-4 w-fit`}
                    >
                      {cert.icon}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full border text-xs font-medium ${getColorClasses(
                        cert.color
                      )}`}
                    >
                      {cert.status}
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <div
                      className={`inline-block px-3 py-1 rounded-full border text-xs font-medium mb-3 ${getCategoryColor(
                        cert.category
                      )}`}
                    >
                      {cert.category}
                    </div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-glow transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-xl text-muted-foreground mb-3">
                      {cert.provider}
                    </p>
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
          {certifications
            .filter((cert) => !cert.featured)
            .map((cert, index) => (
              <div
                key={index}
                className="card-tech  group hover:scale-[1.02] transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg border ${getColorClasses(
                      cert.color
                    )}`}
                  >
                    {cert.icon}
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full border text-xs font-medium ${getCategoryColor(
                      cert.category
                    )}`}
                  >
                    {cert.category}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-glow transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-1">{cert.provider}</p>
                {cert.score && (
                  <p className="text-sm font-semibold text-secondary mb-3">
                    Score: {cert.score}
                  </p>
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
            Conferences &{" "}
            <span className="text-tech-gradient">Recognition</span>
          </h2>

          <div className="space-y-4">
            {conferences.map((conf, index) => (
              <div
                key={index}
                className="card-tech  group hover:scale-[1.01] transition-all duration-300"
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
                    <p className="text-sm text-muted-foreground mb-2">
                      {conf.date}
                    </p>
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
