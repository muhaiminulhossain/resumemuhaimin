import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/assets/profile.jpg" alt="Muhaiminul Hossain" className="profile-pic" />
        <h1>Muhaiminul Hossain</h1>
        <p>Head of Product Management | AgriTech & FinTech Strategist</p>
        <div className="hero-buttons">
          <a href="/assets/resume.pdf" download className="btn">Download Resume</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
          <a href="https://linkedin.com/in/muhaiminulhossain" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href="https://github.com/muhaiminulhossain" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
