export const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return "border-primary text-primary bg-primary/5";
    case "secondary":
      return "border-secondary text-secondary bg-secondary/5";
    case "accent":
      return "border-accent text-accent bg-accent/5";
    default:
      return "border-primary text-primary bg-primary/5";
  }
};

export const getCategoryColor = (category: string) => {
  switch (category) {
    case "Full Stack Development":
      return "bg-primary/10 text-primary border-primary/20";
    case "Programming":
      return "bg-secondary/10 text-secondary border-secondary/20";
    case "Frontend Development":
      return "bg-accent/10 text-accent border-accent/20";
    case "Backend Development":
      return "bg-primary/10 text-primary border-primary/20";
    case "Database":
      return "bg-secondary/10 text-secondary border-secondary/20";
    default:
      return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

export const getGradientClass = (color: string) => {
  switch (color) {
    case "primary":
      return "from-primary/20 to-transparent";
    case "secondary":
      return "from-secondary/20 to-transparent";
    case "accent":
      return "from-accent/20 to-transparent";
    default:
      return "from-primary/20 to-transparent";
  }
};

export const getGlowClass = (color: string) => {
  switch (color) {
    case "primary":
      return "shadow-[var(--glow-primary)]";
    case "secondary":
      return "shadow-[var(--glow-secondary)]";
    case "accent":
      return "shadow-[var(--glow-accent)]";
    default:
      return "shadow-[var(--glow-primary)]";
  }
};
