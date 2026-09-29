import React from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    no: "01",
    title: "STARTER",
    duration: "8 WEEKS",
    text: "Build a sustainable training habit with simple, structured sessions.",
    features: ["3 workouts / week", "Beginner strength plan", "Mobility routine"],
  },
  {
    no: "02",
    title: "STRONGER",
    duration: "12 WEEKS",
    text: "A progressive system for building strength, muscle and confidence.",
    features: ["4 workouts / week", "Progressive overload", "Conditioning plan"],
    featured: true,
  },
  {
    no: "03",
    title: "TRANSFORM",
    duration: "12 WEEKS",
    text: "A complete body-composition program combining training and recovery.",
    features: ["5 workouts / week", "Fat-loss conditioning", "Recovery guidance"],
  },
];

export default function Programs() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero compact">
          <span className="section-kicker">FITZONE / PROGRAMS</span>
          <h1>FOLLOW THE <em>PLAN.</em></h1>
          <p>Stop guessing. Start training with a system designed around your goal.</p>
        </div>

        <div className="program-list">
          {programs.map((program) => (
            <article className={`program-row ${program.featured ? "program-featured" : ""}`} key={program.title}>
              <div className="program-no">{program.no}</div>
              <div className="program-main">
                <div className="program-title-line">
                  <h2>{program.title}</h2>
                  {program.featured && <span className="popular-pill">MOST POPULAR</span>}
                </div>
                <p>{program.text}</p>
              </div>
              <div className="program-duration">{program.duration}</div>
              <ul>
                {program.features.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link className="round-arrow" to="/join">↗</Link>
            </article>
          ))}
        </div>

        <div className="program-bottom">
          <span>Not sure where to start?</span>
          <Link to="/contact">Talk to a coach →</Link>
        </div>
      </div>
    </section>
  );
}
