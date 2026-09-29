import React from "react";
const trainers = [
  ["Arjun Kumar", "Strength Coach", "8 YEARS", "AK", "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80"],
  ["Priya Sharma", "Performance Coach", "6 YEARS", "PS", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80"],
  ["Ananya Rao", "Yoga & Mobility", "7 YEARS", "AR", "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"],
  ["Rahul Menon", "Boxing Coach", "10 YEARS", "RM", "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80"],
];

export default function Trainers() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero compact">
          <span className="section-kicker">FITZONE / COACHES</span>
          <h1>MEET YOUR <em>COACHES.</em></h1>
          <p>Experience, structure and accountability behind every session.</p>
        </div>

        <div className="trainer-grid">
          {trainers.map(([name, role, years, initials, image]) => (
            <article className="trainer-card" key={name}>
              <div className="trainer-image">
                <img src={image} alt={name} />
                <span>{years}</span>
              </div>
              <div className="trainer-body">
                <div>
                  <h2>{name}</h2>
                  <p>{role}</p>
                </div>
                <div className="trainer-initials">{initials}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
