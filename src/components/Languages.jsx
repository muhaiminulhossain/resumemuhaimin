import React from "react";
import "./Languages.css";

const languages = ["Bengali", "English"];

export default function Languages() {
  return (
    <section id="languages" className="languages section">
      <h2>Languages</h2>
      <ul className="lang-list">
        {languages.map((lang, i) => (
          <li key={i} className="lang-item">{lang}</li>
        ))}
      </ul>
    </section>
  );
}
