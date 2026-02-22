import { highlights } from "@/Data/about.data";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-tech-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer on a mission to create innovative digital solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-glow">Who I Am</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A passionate full-stack developer with expertise in <span className="text-primary font-semibold">Python, Java</span> and
              <span className="text-secondary font-semibold"> JavaScript</span>. I love solving complex problems
              and building innovative digital solutions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="card-tech text-center">
                <div className="text-2xl font-bold text-primary mb-1">1050+</div>
                <div className="text-xs text-muted-foreground">Problems Solved</div>
              </div>
              <div className="card-tech text-center">
                <div className="text-2xl font-bold text-secondary mb-1">4+</div>
                <div className="text-xs text-muted-foreground">Projects Built</div>
              </div>
              <div className="card-tech text-center">
                <div className="text-2xl font-bold text-accent mb-1">8.78</div>
                <div className="text-xs text-muted-foreground">CGPA</div>
              </div>
              <div className="card-tech text-center">
                <div className="text-2xl font-bold text-primary-glow mb-1">250+</div>
                <div className="text-xs text-muted-foreground">Days Coding</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-tech  group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="card-tech max-w-4xl mx-auto text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-tech-gradient">Development Philosophy</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "Code is not just about solving problems—it's about crafting elegant solutions
            that stand the test of time. Every line of code should tell a story, and every
            application should make someone's life a little bit better."
          </p>
          <div className="mt-6 text-primary font-mono text-sm">
            console.log("Building the future, one commit at a time 🚀");
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;