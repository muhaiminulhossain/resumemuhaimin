import React from "react";
import "./Tools.css";

const tools = [
  "Figma (Intermediate)","Notion (Advanced)","Miro (Advanced)","Jira (Advanced)",
  "Trello (Advanced)","Metabase (Basic)","Mixpanel (Advanced)",
  "Google Analytics (Intermediate)","GitHub (Basic)","PyCharm (Basic)"
];

export default function Tools(){
  return (
    <section className="tools">
      <h2>Tools</h2>
      <div className="card">
        <ul className="tools-list">
          {tools.map((t,i)=><li key={i}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}
