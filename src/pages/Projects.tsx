import SpotlightCard from "@/components/ui/spotLightCard";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Database,
  Code2,
  Zap,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio built with React.js showcasing my skills, projects, and enabling collaboration. Features interactive UI/UX design and smooth animations.",
      image: "/api/placeholder/400/250",
      tags: ["React.js", "JavaScript", "CSS", "Responsive Design"],
      github: "https://github.com/Rajnish-J/Portfolio.git",
      live: "https://rajnish7102.netlify.app/",
      date: "Dec 2024",
      icon: <Code2 className="w-6 h-6" />,
      color: "primary",
    },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive healthcare management solution for patient registration, appointment scheduling, and doctor availability tracking with full CRUD operations.",
      image: "/api/placeholder/400/250",
      tags: ["Spring Boot", "React.js", "MySQL", "REST API"],
      github: "https://github.com/Rajnish-J/Hospify",
      live: null,
      date: "Dec 2024",
      icon: <Users className="w-6 h-6" />,
      color: "secondary",
    },
    {
      title: "Agricultural Supply Chain System",
      description:
        "Integrated warehouse management system designed to optimize storage and tracking of agricultural materials with real-time inventory management.",
      image: "/api/placeholder/400/250",
      tags: ["JDBC", "Java", "Database Design", "Inventory Management"],
      github: null,
      live: null,
      date: "Mar 2024",
      icon: <Database className="w-6 h-6" />,
      color: "accent",
    },
    {
      title: "M.A.I.D - Cleaning Robot",
      description:
        "Intelligent home cleaning bot using Arduino microcontroller with automated material dispensing and efficient navigation systems.",
      image: "/api/placeholder/400/250",
      tags: ["Arduino", "C++", "Embedded Systems", "IoT"],
      github: null,
      live: null,
      date: "Nov 2022",
      icon: <Zap className="w-6 h-6" />,
      color: "primary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary border-primary hover:shadow-[var(--glow-primary)]";
      case "secondary":
        return "text-secondary border-secondary hover:shadow-[var(--glow-secondary)]";
      case "accent":
        return "text-accent border-accent hover:shadow-[var(--glow-accent)]";
      default:
        return "text-primary border-primary hover:shadow-[var(--glow-primary)]";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-tech-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects, from web applications to
            embedded systems
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <SpotlightCard
                    className="card-tech group hover:scale-[0.97] transition-all duration-500 h-full"
                    spotlightColor={`rgba(${
                      project.color === "primary"
                        ? "0, 229, 255"
                        : project.color === "secondary"
                        ? "34, 197, 94"
                        : "168, 85, 247"
                    }, 0.2)`}
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div
                          className={`p-3 rounded-lg border ${getColorClasses(
                            project.color
                          )} bg-surface-elevated mr-4`}
                        >
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-glow transition-all duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.date}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-surface-elevated border border-card-border rounded-full text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-surface-elevated border border-card-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-300 ${getColorClasses(
                            project.color
                          )} bg-surface-elevated hover:bg-primary/5`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </SpotlightCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <SpotlightCard
            className="card-tech max-w-2xl mx-auto"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h3 className="text-2xl font-bold mb-4 text-tech-gradient">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and explore innovative
              ideas. Let's build something amazing together!
            </p>
            <a href="/contact" className="btn-tech inline-flex items-center">
              Start a Project
            </a>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
