import { nowProducts } from "../data/resume";

export default function Now() {
  return (
    <section id="now" className="section">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">01 — Now</p>
          <h2>Leading technology &amp; product at Spreeha Foundation</h2>
          <p className="section-lede">
            Three AI and data products for health care in underserved communities, with oversight of
            engineering, design, data and AI/ML teams.
          </p>
        </header>

        <div className="product-grid">
          {nowProducts.map((p) => (
            <article key={p.name} className="product reveal">
              <p className="product-kind">{p.kind}</p>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <ul className="facts">
                {p.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
