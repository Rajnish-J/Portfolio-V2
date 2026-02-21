export const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return "text-primary hover:border-primary";
    case "secondary":
      return "text-secondary hover:border-secondary";
    case "accent":
      return "text-accent hover:border-accent";
    default:
      return "text-primary hover:border-primary";
  }
};

export const getGlowClasses = (color: string) => {
  switch (color) {
    case "primary":
      return "hover:shadow-[var(--glow-primary)]";
    case "secondary":
      return "hover:shadow-[var(--glow-secondary)]";
    case "accent":
      return "hover:shadow-[var(--glow-accent)]";
    default:
      return "hover:shadow-[var(--glow-primary)]";
  }
};
