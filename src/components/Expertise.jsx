import { competencies, stack } from "../data/resume";

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">03 — Expertise</p>
          <h2>What I bring to a product team</h2>
        </header>

        <div className="comp-grid">
          {competencies.map((c) => (
            <div key={c.title} className="comp reveal">
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="stack reveal">
          <h3>Tools I use</h3>
          <dl>
            {stack.map((s) => (
              <div key={s.group} className="stack-row">
                <dt>{s.group}</dt>
                <dd>
                  {s.items.map((i) => (
                    <span key={i} className="chip">
                      {i}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
