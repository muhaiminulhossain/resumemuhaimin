import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>

      <p className="lead">
        Open to product leadership, strategy, and growth roles. Let’s build something that ships and sticks.
      </p>

      <ul className="contact-list">
        <li>
          <span className="label">Email</span>
          <a href="mailto:hossain.muhaiminul@gmail.com">hossain.muhaiminul@gmail.com</a>
        </li>
        <li>
          <span className="label">Location</span>
          <span>Dhaka, Bangladesh</span>
        </li>
      </ul>

      <div className="actions">
        <a className="btn" href="mailto:hossain.muhaiminul@gmail.com">Email Me</a>
        <a
          className="btn"
          href="https://www.linkedin.com/in/muhaiminulhossain/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="btn"
          href="https://github.com/muhaiminulhossain"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a className="btn" href="/assets/resume.pdf" download>
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
}
