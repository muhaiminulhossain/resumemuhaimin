import { useEffect } from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Now from "./components/Now";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";

export default function App() {
  // Fade sections in once as they scroll into view.
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("show"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Now />
        <Experience />
        <Expertise />
        <Recognition />
        <Contact />
      </main>
    </>
  );
}
