import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Hero />
        <Summary />
        <div className="section reveal"><Experience /></div>
        <div className="section reveal"><Skills /></div>
        <div className="section reveal"><Tools /></div>
        <div className="section reveal"><Education /></div>
        <div className="section reveal"><Certifications /></div>
        <div className="section reveal"><Awards /></div>
        <div className="section reveal"><Languages /></div>
        <div className="section reveal"><Contact /></div>
      </div>
    </>
  );
}
