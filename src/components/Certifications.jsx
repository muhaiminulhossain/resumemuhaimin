import React from "react";
import "./Certifications.css";

const certs = [
  "Code in Place 2024 — Stanford University",
  "Storytelling for a Change — Acumen",
  "Social and Business Research Methodology — IBA, University of Dhaka",
  "Human Centered Design — BRAC Social Innovation Lab"
];

export default function Certifications(){
  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="card">
        <ul>{certs.map((c,i)=><li key={i}>{c}</li>)}</ul>
      </div>
    </section>
  );
}
