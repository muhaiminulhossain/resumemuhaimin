import { awards, education, certifications } from "../data/resume";

export default function Recognition() {
  return (
    <section id="recognition" className="section">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">04 — Recognition</p>
          <h2>Awards, mentoring &amp; learning</h2>
        </header>

        <div className="rec-grid">
          <ol className="awards">
            {awards.map((a) => (
              <li key={a.title} className="reveal">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ol>

          <aside className="learning reveal">
            <h3>Education</h3>
            <p className="edu-degree">{education.degree}</p>
            <p className="edu-school">{education.school}</p>

            <h3>Certifications</h3>
            <ul className="certs">
              {certifications.map((c) => (
                <li key={c.title}>
                  <span className="cert-year">{c.year}</span>
                  <span>
                    {c.title}
                    <span className="cert-org">{c.org}</span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
