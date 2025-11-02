import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Journey from "./Journey";
import Contact from "./Contact";
import Blob from "./Blog";

const Index = () => {
  const location = useLocation();

  // If navigated with a hash (e.g. /#about), scroll to that section on mount
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // small timeout to ensure DOM ready
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          80
        );
      }
    }
  }, [location.hash]);

  return (
    <main className="snap-y snap-mandatory scroll-smooth">
      <section id="home" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="education" className="snap-start">
        <Education />
      </section>

      <section id="certifications" className="snap-start">
        <Certifications />
      </section>

      <section id="journey" className="snap-start">
        <Journey />
      </section>

      <section id="blob" className="snap-start">
        <Blob />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </main>
  );
};

export default Index;
