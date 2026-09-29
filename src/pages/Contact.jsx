import React from "react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero compact">
          <span className="section-kicker">FITZONE / CONTACT</span>
          <h1>LET'S <em>TALK.</em></h1>
          <p>Questions about memberships, programs or training? Send us a message.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-block"><span>LOCATION</span><strong>24 Fitness Street<br />Chennai, Tamil Nadu</strong></div>
            <div className="contact-block"><span>PHONE</span><strong>+91 98765 43210</strong></div>
            <div className="contact-block"><span>EMAIL</span><strong>hello@fitzone.in</strong></div>
            <div className="contact-block"><span>HOURS</span><strong>Mon–Sat / 5:30 AM–10:00 PM<br />Sunday / 6:00 AM–1:00 PM</strong></div>
          </div>

          <div className="form-card">
            {sent ? (
              <div className="success-box">
                <div className="success-icon">✓</div>
                <h2>MESSAGE <em>SENT.</em></h2>
                <p>Thanks for reaching out. We will get back to you soon.</p>
                <button className="outline-btn" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <label>Name<input required placeholder="Your name" /></label>
                <label>Email<input type="email" required placeholder="you@email.com" /></label>
                <label>Subject<input required placeholder="How can we help?" /></label>
                <label>Message<textarea required rows="6" placeholder="Write your message..."></textarea></label>
                <button className="lime-btn w-100" type="submit">Send Message <span>↗</span></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
