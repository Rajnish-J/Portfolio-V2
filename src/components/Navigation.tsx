import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV_ITEMS = [
  { name: "Home", id: "home", path: "/" },
  { name: "About", id: "about", path: "/about" },
  { name: "Skills", id: "skills", path: "/skills" },
  { name: "Projects", id: "projects", path: "/projects" },
  { name: "Education", id: "education", path: "/education" },
  { name: "Certifications", id: "certifications", path: "/certifications" },
  { name: "Journey", id: "journey", path: "/journey" },
  { name: "Contact", id: "contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Keep path for route fallback, and id for single-page scroll behavior
  const navItems = NAV_ITEMS;

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("home");

  // Use route-based active indicator as fallback when not on root
  const isRouteActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Observe sections and update activeSection
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { root: null, threshold: 0.55 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []); // run once

  const handleNavClick = (e: React.MouseEvent, id: string, path: string) => {
    // If we're on root route, just scroll to section
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Not on root: navigate to root with hash then scroll after short delay
    e.preventDefault();
    navigate(`/#${id}`);
    // Delay scroll to allow Index to mount
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold font-mono">
            <span className="text-tech-gradient">&lt;Rajnish J /&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id, item.path)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  // prefer section-based active when on root, else route-based
                  (
                    location.pathname === "/"
                      ? activeSection === item.id
                      : isRouteActive(item.path)
                  )
                    ? "bg-primary text-primary-foreground shadow-[var(--glow-primary)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleNavClick(e, item.id, item.path);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    (
                      location.pathname === "/"
                        ? activeSection === item.id
                        : isRouteActive(item.path)
                    )
                      ? "bg-primary text-primary-foreground shadow-[var(--glow-primary)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
