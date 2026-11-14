import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/resume";

const links = [
  { id: "now", label: "Now" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="monogram" aria-label="Back to top">
          MH
        </a>
        <nav aria-label="Sections">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <a className="btn btn-small" href={profile.resume} download>
            Résumé
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
