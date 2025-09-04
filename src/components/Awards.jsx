import React from "react";
import "./Awards.css";

const awards = [
  "Managed USD 50,000 grant for VISA Accelerator Program 2024; delivered 113 debit cards to marginalized farmers.",
  "Finished Top 6 in World Blockchain Hackathon 2020"
];

export default function Awards(){
  return (
    <section className="awards">
      <h2>Awards</h2>
      <div className="card">
        <ul>{awards.map((a,i)=><li key={i}>{a}</li>)}</ul>
      </div>
    </section>
  );
}
