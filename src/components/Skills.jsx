import React from "react";
import "./Skills.css";

const skills = [
  "Strategic Vision & Product Roadmapping",
  "Digital Branding & Marketing",
  "Product Lifecycle Management",
  "Data Analysis & Business Intelligence",
  "Cross-Functional Leadership & Team Building",
  "User Experience Design & Optimization",
  "Innovation & Growth Hacking",
  "Stakeholder & Partnership Management",
  "Performance Monitoring & A/B Testing",
  "Agile Methodology, OKRs",
  "Go-To-Market planning",
  "Software Development Life Cycle"
];

export default function Skills(){
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="card">
        <div className="badges">
          {skills.map((s,i)=><span className="badge" key={i}>{s}</span>)}
        </div>
      </div>
    </section>
  );
}
