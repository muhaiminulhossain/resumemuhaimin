import { profile } from "../data/resume";
import EmailButton from "./EmailButton";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-card reveal">
          <p className="kicker">05 — Contact</p>
          <h2>Let&rsquo;s talk about products that matter.</h2>
          <p className="section-lede">
            Open to conversations on product leadership, AI in health and financial inclusion,
            advisory work and mentoring.
          </p>
          <EmailButton className="contact-email">{profile.email}</EmailButton>
          <div className="hero-actions">
            <a className="btn" href={profile.resume} download>
              Download résumé (PDF)
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
