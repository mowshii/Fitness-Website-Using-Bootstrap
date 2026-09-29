import React from "react";
import { Link } from "react-router-dom";

const workouts = [
  ["Strength", "Build muscle, power and foundational strength.", "60 MIN", "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80"],
  ["HIIT", "Short, intense sessions designed to push your limits.", "35 MIN", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"],
  ["Cardio", "Improve endurance, heart health and work capacity.", "45 MIN", "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=80"],
  ["Mobility", "Move better, recover better and stay ready.", "30 MIN", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80"],
  ["Boxing", "Footwork, conditioning and technique in one session.", "50 MIN", "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=80"],
  ["Athletic", "Explosive movement and performance-focused training.", "55 MIN", "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=80"],
];

export default function Workouts() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero">
          <span className="section-kicker">FITZONE / WORKOUTS</span>
          <h1>TRAINING THAT <em>MOVES</em> YOU.</h1>
          <p>Choose a session, set your pace and keep building.</p>
        </div>

        <div className="workout-grid">
          {workouts.map(([title, text, time, image], i) => (
            <article className="workout-card" key={title}>
              <div className="workout-image">
                <img src={image} alt={title} />
                <span className="workout-index">0{i + 1}</span>
                <span className="workout-time">{time}</span>
              </div>
              <div className="workout-body">
                <h2>{title}</h2>
                <p>{text}</p>
                <Link to="/join">Start session <span>↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
