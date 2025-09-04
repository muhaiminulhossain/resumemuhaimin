import React from "react";
import "./Contact.css";

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="card">
        <p><strong>Address:</strong> 15, R: 9, Block: J, Bashundhara R/A, Dhaka, Bangladesh</p>
        <p><strong>Phone:</strong> +8801710301229</p>
        <p><strong>Email:</strong> <a href="mailto:hossainmuhaiminul@gmail.com">hossainmuhaiminul@gmail.com</a></p>
        <div className="row">
          <a className="btn ghost" href="https://linkedin.com/in/muhaiminulhossain" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn ghost" href="https://github.com/muhaiminulhossain" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="/assets/resume.pdf" download>Download PDF</a>
        </div>
      </div>
    </section>
  );
}
