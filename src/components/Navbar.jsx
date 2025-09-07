import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
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

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
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
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
