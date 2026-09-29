import React from "react";
import { useState } from "react";

export default function Join() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", age: "", goal: "Build Strength", plan: "Pro ₹1,999",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="page-shell">
      <div className="container">
        <div className="form-layout">
          <div className="form-intro">
            <span className="section-kicker">FITZONE / JOIN</span>
            <h1>YOUR NEXT <em>CHAPTER</em> STARTS HERE.</h1>
            <p>Tell us a little about yourself and we will help you choose the right starting point.</p>
            <div className="form-note">
              <strong>01</strong><span>Fill in your details</span>
              <strong>02</strong><span>Choose your goal</span>
              <strong>03</strong><span>Start training</span>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✓</div>
                <span className="section-kicker">APPLICATION RECEIVED</span>
                <h2>YOU'RE <em>IN.</em></h2>
                <p>Thanks, {form.name || "there"}! Our team will contact you shortly.</p>
                <button className="outline-btn" onClick={() => setSubmitted(false)}>Submit another</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-row">
                  <label>Full name<input name="name" value={form.name} onChange={update} required placeholder="Your name" /></label>
                  <label>Email<input type="email" name="email" value={form.email} onChange={update} required placeholder="you@email.com" /></label>
                </div>
                <div className="form-row">
                  <label>Phone<input name="phone" value={form.phone} onChange={update} required placeholder="+91" /></label>
                  <label>Age<input type="number" name="age" value={form.age} onChange={update} required placeholder="25" /></label>
                </div>
                <label>Primary goal
                  <select name="goal" value={form.goal} onChange={update}>
                    <option>Build Strength</option>
                    <option>Lose Fat</option>
                    <option>Improve Fitness</option>
                    <option>Athletic Performance</option>
                  </select>
                </label>
                <label>Membership
                  <select name="plan" value={form.plan} onChange={update}>
                    <option>Starter ₹999</option>
                    <option>Pro ₹1,999</option>
                    <option>Elite ₹2,999</option>
                  </select>
                </label>
                <button className="lime-btn w-100" type="submit">Submit Application <span>↗</span></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
