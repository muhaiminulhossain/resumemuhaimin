// src/components/Experience.jsx
import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Head of Product Management",
    company: "iFarmer Limited",
    period: "July 2021 – Present",
    location: "Dhaka, Bangladesh",
    details: [
      "Scaled iFarmer investment platform to 34,063 investors, managing BDT 15.9B ($145M+) in lifetime investments, with 65% YoY user growth (2025 vs 2024).",
      "Increased financial inclusion with 8,496 reinvestments and active base of 21,355 investors in last 3 months.",
      "Expanded Sofol farmer app to 140k+ registered farmers, enabling BDT 1.8B in financing (bank + non-bank) and activating 629 IFC agents & 69 market facilitators.",
      "Built KriSHOP marketplace with 11,945 retailers, driving 36,083 successful orders (BDT 749M GMV) and achieving 80% order success rate.",
      "Grew product catalog to 2,355 SKUs and maintained 9,500+ active retailers.",
      "Established farmer community platform generating 3,200+ posts, 699 active users, and 87 daily engagements.",
      "Won VISA Accelerator Program 2024, delivering 113 QR Farmer Cards in pilot with USD 50k grant.",
      "Developed a payment system that won the VISA Accelerator Programme 2024 cohort.",
      "Directed end-to-end UX/UI cycles—wireframing, prototyping, usability testing—boosting satisfaction and retention.",
      "Led rollout of QR-based Farmer Card to strengthen closed-loop transactions.",
      "Integrated data insights and user feedback to optimize features and drive engagement.",
      "Spearheaded branding strategies to elevate market presence and partner trust.",
      "Forged strategic partnerships with global accelerators (Google for Startups, Rippleworks).",
      "Implemented Agile methodologies and OKR frameworks to foster continuous innovation."
    ]
  },
  {
    role: "Product Manager",
    company: "iFarmer Limited",
    period: "July 2020 – June 2021",
    location: "Dhaka, Bangladesh",
    details: [
      "Launched ‘SOFOL’, streamlining Agri-Advisory and farmer services.",
      "Developed 'Kri-Shop', an e-commerce platform for agri-input retailers.",
      "Led creation of 'i-Core', an admin panel integrating iFarmer products for internal stakeholders.",
      "Revamped iFarmer App 2.0 with Investor Dashboard and digital payments.",
      "Initiated exploratory blockchain project with InfoCorp for agriculture."
    ]
  },
  {
    role: "Product Manager",
    company: "SureCash",
    period: "Aug 2019 – June 2020",
    location: "Dhaka, Bangladesh",
    details: [
      "Led development of TallyKhata and Rechargewalla for target user efficiency.",
      "Designed and developed MVP of digital wallet ecosystem 'TallyPay'.",
      "Built MVP credit-scoring model for micro-merchants via TallyKhata data.",
      "Managed UNCDF Shift Fund to digitize micro-merchants."
    ]
  },
  {
    role: "Senior Executive",
    company: "BRAC",
    period: "Aug 2018 – May 2019",
    location: "Dhaka, Bangladesh",
    details: [
      "Managed Microfinance Call Center team and devised growth strategy.",
      "Built CSA database platform for microfinance applications.",
      "Created digital loan service processes for microcredit and SME clients.",
      "Streamlined branch-level operations for improved performance.",
      "Oversaw CSA portfolio; primary liaison with bKash for microfinance on MFS.",
      "Executed strategic plan for Bengali New Year (2019) celebration.",
      "Implemented financial education training initiatives."
    ]
  },
  {
    role: "Management Professional Staff",
    company: "BRAC",
    period: "May 2017 – July 2018",
    location: "Dhaka, Bangladesh",
    details: [
      "Designed/launched multiple products: first-ever E-commerce Loan with ShopUp; Cash-Credit Loan for microfinance clients; financial services for RMG workers; pilot of Job-Holder’s Loan; expansion strategy.",
      "Created a human-centered design module to empower underprivileged women via mobile platforms.",
      "Led initiative to manage surplus funds for microfinance branches.",
      "Built solutions supporting cashless branch concepts.",
      "Designed comprehensive product-mapping strategy for BRAC Microfinance."
    ]
  },
  {
    role: "Young Professional Trainee",
    company: "BRAC",
    period: "May 2016 – April 2017",
    location: "Dhaka, Bangladesh",
    details: [
      "Supervised branch operations maintaining a BDT 5 Crore portfolio and servicing 3,000 active clients.",
      "Conducted market research on BRAC Chicken’s potential in Dhaka city."
    ]
  },
  {
    role: "Order Processing Executive",
    company: "Kaymu Bangladesh",
    period: "Aug 2015 – April 2016",
    location: "Dhaka, Bangladesh",
    details: [
      "Achieved top commission collection rate (95%) in Feb 2016.",
      "Conceptualised establishment of two newly defined job posts."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content card">
              <h3>{exp.role} — {exp.company}</h3>
              <p className="meta">
                <strong>{exp.period}</strong> • {exp.location}
              </p>
              <ul>
                {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
