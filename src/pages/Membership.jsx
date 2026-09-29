import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "STARTER",
    price: "999",
    text: "For building a consistent fitness routine.",
    features: ["Gym access", "3 group sessions / week", "Basic assessment"],
  },
  {
    name: "PRO",
    price: "1,999",
    text: "For serious progress with more coaching.",
    features: ["Unlimited gym access", "Unlimited group sessions", "Monthly progress check", "Program access"],
    featured: true,
  },
  {
    name: "ELITE",
    price: "2,999",
    text: "For maximum support and accountability.",
    features: ["Everything in Pro", "4 personal coaching sessions", "Nutrition guidance", "Priority booking"],
  },
];

export default function Membership() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero compact">
          <span className="section-kicker">FITZONE / MEMBERSHIP</span>
          <h1>INVEST IN <em>YOURSELF.</em></h1>
          <p>Flexible memberships. Serious training. No complicated setup.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? "price-featured" : ""}`} key={plan.name}>
              {plan.featured && <div className="price-badge">RECOMMENDED</div>}
              <span className="price-name">{plan.name}</span>
              <div className="price-value"><small>₹</small>{plan.price}<span>/mo</span></div>
              <p>{plan.text}</p>
              <div className="price-divider"></div>
              <ul>
                {plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}
              </ul>
              <Link to="/join" className={plan.featured ? "lime-btn w-100" : "outline-btn w-100"}>
                Choose {plan.name}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
