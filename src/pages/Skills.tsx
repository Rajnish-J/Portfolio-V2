import * as s from "@/Imports/skills.imports"

const Skills = () => {
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-tech-gradient">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technology stack and expertise across different domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {s.skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-tech animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-lg border border-border ${s.getColorClasses(
                    category.color
                  )} bg-surface-elevated mr-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border transition-all duration-300 ${s.getColorClasses(
                      category.color
                    )} ${s.getGlowClasses(category.color)} group cursor-pointer`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {skill.image ? (
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <span className="font-medium text-sm truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-tech animate-fade-in text-center">
            <div className="text-4xl font-bold text-primary mb-2">1050+</div>
            <div className="text-muted-foreground mb-2">Problems Solved</div>
            <div className="text-sm text-secondary">CodeChef Platform</div>
          </div>

          <div className="card-tech animate-fade-in text-center">
            <div className="text-4xl font-bold text-secondary mb-2">250+</div>
            <div className="text-muted-foreground mb-2">Days of Practice</div>
            <div className="text-sm text-accent">Consistent Learning</div>
          </div>

          <div className="card-tech animate-fade-in text-center">
            <div className="text-4xl font-bold text-accent mb-2">4+</div>
            <div className="text-muted-foreground mb-2">Major Projects</div>
            <div className="text-sm text-primary">Full Stack Development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
