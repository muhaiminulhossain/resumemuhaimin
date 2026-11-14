import { experience } from "../data/resume";

function Role({ r }) {
  return (
    <article className={`role reveal ${r.current ? "is-current" : ""}`}>
      <div className="role-when">
        <span>{r.period}</span>
        <span className="role-where">{r.location}</span>
      </div>
      <div className="role-body">
        <h3>
          {r.role}
          <span className="role-company">{r.company}</span>
        </h3>
        {r.note && <p className="role-note">{r.note}</p>}
        <ul>
          {r.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  const main = experience.filter((r) => !r.earlier);
  const earlier = experience.filter((r) => r.earlier);

  return (
    <section id="experience" className="section">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">02 — Experience</p>
          <h2>A decade of shipping products in emerging markets</h2>
        </header>

        <div className="roles">
          {main.map((r) => (
            <Role key={r.role + r.period} r={r} />
          ))}
        </div>

        {earlier.length > 0 && (
          <details className="earlier">
            <summary>
              <span>Earlier roles — BRAC &amp; Kaymu, 2015–2019</span>
              <span className="chev" aria-hidden="true">+</span>
            </summary>
            <div className="roles">
              {earlier.map((r) => (
                <Role key={r.role + r.period} r={r} />
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
