import React, { useEffect, useState } from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  useEffect(() => {
    console.log("[Navbar] mounted");
    return () => console.log("[Navbar] unmounted");
  }, []);
  // ...rest of your component...

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="inner">
        <ul>
          <li className={activeSection === "hero" ? "active" : ""}>
            <a href="#hero">Home</a>
          </li>
          <li className={activeSection === "summary" ? "active" : ""}>
            <a href="#summary">Summary</a>
          </li>
          <li className={activeSection === "experience" ? "active" : ""}>
            <a href="#experience">Experience</a>
          </li>
          <li className={activeSection === "skills" ? "active" : ""}>
            <a href="#skills">Skills</a>
          </li>
          <li className={activeSection === "tools" ? "active" : ""}>
            <a href="#tools">Tools</a>
          </li>
          <li className={activeSection === "education" ? "active" : ""}>
            <a href="#education">Education</a>
          </li>
          <li className={activeSection === "certifications" ? "active" : ""}>
            <a href="#certifications">Certifications</a>
          </li>
          <li className={activeSection === "awards" ? "active" : ""}>
            <a href="#awards">Awards</a>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* 🌙 / ☀️ toggle button */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
