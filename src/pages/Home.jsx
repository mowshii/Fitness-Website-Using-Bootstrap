import React from "react";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85";

const cards = [
  {
    title: "Strength",
    text: "Build muscle, power and confidence.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Conditioning",
    text: "Improve stamina and everyday performance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mobility",
    text: "Move freely with focused recovery work.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={heroImage} alt="Athlete training in a modern gym" />
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-eyebrow">
            <span></span> PREMIUM TRAINING / CHENNAI
          </div>
          <h1>
            TRAIN
            <br />
            <em>WITH</em> PURPOSE.
          </h1>
          <p className="hero-text">
            Structured workouts. Expert coaching. A stronger version of you.
          </p>

          <div className="hero-actions">
            <Link to="/join" className="lime-btn">
              Start Your Journey <span>↗</span>
            </Link>
            <Link to="/workouts" className="outline-btn">
              Explore Workouts
            </Link>
          </div>

          <div className="hero-mini-stats">
            <div><strong>10K+</strong><span>Members</span></div>
            <div><strong>100+</strong><span>Workouts</span></div>
            <div><strong>12</strong><span>Expert Coaches</span></div>
          </div>
        </div>

        <div className="hero-side-label">FITZONE / 01</div>
      </section>

      <section className="marquee">
        <div>STRENGTH <span>•</span> CONDITIONING <span>•</span> MOBILITY <span>•</span> PERFORMANCE <span>•</span> COMMUNITY <span>•</span></div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / TRAINING</span>
              <h2>BUILT FOR <em>REAL</em> PROGRESS.</h2>
            </div>
            <p>Choose a goal. Follow the plan. Track the change.</p>
          </div>

          <div className="goal-grid">
            {cards.map((card, index) => (
              <Link className="goal-card" to="/workouts" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="goal-card-shade"></div>
                <div className="goal-number">0{index + 1}</div>
                <div className="goal-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span>Explore ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-dark">
        <div className="container">
          <div className="feature-layout">
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85"
                alt="Strength training"
              />
              <div className="image-tag">12 WEEK PROGRAM</div>
            </div>

            <div className="feature-copy">
              <span className="section-kicker">02 / PROGRAM</span>
              <h2>THE <em>STRONGER</em> YOU PROGRAM.</h2>
              <p>
                A progressive 12-week system combining strength, conditioning,
                mobility and recovery. Designed for consistency, not quick fixes.
              </p>

              <div className="feature-points">
                <div><strong>01</strong><span>Progressive strength sessions</span></div>
                <div><strong>02</strong><span>Weekly conditioning targets</span></div>
                <div><strong>03</strong><span>Mobility & recovery guidance</span></div>
              </div>

              <Link to="/programs" className="lime-btn">
                View Program <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-band-grid">
          <div><strong>08+</strong><span>Years of coaching</span></div>
          <div><strong>100+</strong><span>Training sessions</span></div>
          <div><strong>4.9</strong><span>Member experience</span></div>
          <div><strong>24/7</strong><span>Community support</span></div>
        </div>
      </section>

      <section className="cta-panel">
        <div className="container">
          <div className="cta-inner">
            <span className="section-kicker">03 / YOUR MOVE</span>
            <h2>READY TO <em>START?</em></h2>
            <p>Your first session is the hardest one to schedule. Make it today.</p>
            <Link to="/join" className="lime-btn">Join FitZone <span>↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
