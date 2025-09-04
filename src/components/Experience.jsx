import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Head of Product Management",
    company: "iFarmer Limited",
    period: "July 2021 - Present",
    location: "Dhaka, Bangladesh",
    details: [
      "Developed a payment system that won VISA Accelerator Programme 2024 cohort.",
      "Directed end-to-end UX/UI cycles enhancing customer satisfaction.",
      "Rolled out QR-based Farmer Card strengthening closed-loop transactions.",
      "Forged partnerships with Google for Startups and Rippleworks.",
      "Implemented Agile methodologies and OKR frameworks."
    ]
  },
  {
    role: "Product Manager",
    company: "iFarmer Limited",
    period: "July 2020 - June 2021",
    location: "Dhaka, Bangladesh",
    details: [
      "Launched ‘SOFOL’, streamlining Agri-Advisory services.",
      "Developed 'Kri-Shop', an e-commerce platform for agri-input retailers.",
      "Led the creation of 'i-Core', an admin panel for stakeholders.",
      "Revamped iFarmer App 2.0 with Investor Dashboard & digital payments.",
      "Explored blockchain tech in agriculture with InfoCorp."
    ]
  },
  {
    role: "Product Manager",
    company: "SureCash",
    period: "Aug 2019 - Jun 2020",
    location: "Dhaka, Bangladesh",
    details: [
      "Led development of TallyKhata and Rechargewalla.",
      "Built MVP of TallyPay digital wallet ecosystem.",
      "Developed credit scoring model for micro-merchants.",
      "Managed UNCDF Shift Fund digitizing micro-merchants."
    ]
  },
  {
    role: "Senior Executive",
    company: "BRAC",
    period: "Aug 2018 - May 2019",
    location: "Dhaka, Bangladesh",
    details: [
      "Managed Microfinance Call Center team.",
      "Created CSA database for microfinance apps.",
      "Built digital loan services for SME and microcredit clients.",
      "Streamlined branch-level operations.",
      "Main contact for bKash partnership."
    ]
  },
  {
    role: "Management Professional Staff",
    company: "BRAC",
    period: "May 2017 - Jul 2018",
    location: "Dhaka, Bangladesh",
    details: [
      "Launched first-ever E-commerce Loan with ShopUp.",
      "Created RMG financial services & Job-Holder's Loan.",
      "Built cashless branch concept.",
      "Designed product mapping strategy."
    ]
  },
  {
    role: "Young Professional Trainee",
    company: "BRAC",
    period: "May 2016 - Apr 2017",
    location: "Dhaka, Bangladesh",
    details: [
      "Supervised branch portfolio worth BDT 5 Crore with 3000 clients.",
      "Researched BRAC Chicken’s market potential."
    ]
  },
  {
    role: "Order Processing Executive",
    company: "Kaymu Bangladesh",
    period: "Aug 2015 - Apr 2016",
    location: "Dhaka, Bangladesh",
    details: [
      "Achieved top commission collection rate (95%).",
      "Proposed creation of two new job roles."
    ]
  }
];

export default function Experience(){
  return (
    <section className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, i)=>(
        <div key={i} className="exp-item card">
          <div className="exp-card">
            <h3>{exp.role} — {exp.company}</h3>
            <div className="exp-meta"><strong>{exp.period}</strong> • {exp.location}</div>
            <ul className="exp-points">
              {exp.details.map((d, idx)=><li key={idx}>{d}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
