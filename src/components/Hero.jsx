import { profile, stats } from "../data/resume";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse" aria-hidden="true" />
            {profile.current}
          </p>
          <h1 className="display">{profile.name}</h1>
          <p className="hero-role">
            {profile.headline} <span className="sep">/</span> {profile.focus}
          </p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn" href={profile.resume} download>
              Download résumé
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </div>

        <figure className="hero-photo">
          <img src={profile.photo} alt="Portrait of Muhaiminul Hossain" />
        </figure>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
