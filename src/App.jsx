// src/App.jsx
import React, { useEffect } from "react";
import "./App.css";

// Top bar
import Navbar from "./components/Navbar";

// Sections
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";
import Contact from "./components/Contact";

export default function App() {
  // Reveal-on-scroll (once per element)
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Fixed/sticky top nav */}
      <Navbar />

      {/* Centered page container */}
      <div className="wrapper">
        {/* Each section wrapped with an id that matches the Navbar links */}
        <section id="hero" className="section reveal">
          <Hero />
        </section>

        <section id="summary" className="section reveal">
          <Summary />
        </section>

        <section id="experience" className="section reveal">
          <Experience />
        </section>

        <section id="skills" className="section reveal">
          <Skills />
        </section>

        <section id="tools" className="section reveal">
          <Tools />
        </section>

        <section id="education" className="section reveal">
          <Education />
        </section>

        <section id="certifications" className="section reveal">
          <Certifications />
        </section>

        <section id="awards" className="section reveal">
          <Awards />
        </section>

        <section id="contact" className="section reveal">
          <Contact />
        </section>
      </div>
    </>
  );
}
