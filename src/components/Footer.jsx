import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top row g-5">
          <div className="col-lg-5">
            <Link className="brand-mark footer-brand" to="/">
              FIT<span>ZONE</span>
            </Link>
            <p className="footer-copy">
              A modern training community for people who want to move better,
              get stronger and build lasting habits.
            </p>
            <div className="footer-socials">
              <a href="#instagram" aria-label="Instagram">IG</a>
              <a href="#facebook" aria-label="Facebook">FB</a>
              <a href="#youtube" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Explore</h6>
            <Link to="/">Home</Link>
            <Link to="/workouts">Workouts</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/trainers">Trainers</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Membership</h6>
            <Link to="/membership">Plans</Link>
            <Link to="/join">Join Now</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-lg-3">
            <h6>Visit</h6>
            <p>24 Fitness Street<br />Chennai, Tamil Nadu</p>
            <p>+91 98765 43210</p>
            <p>hello@fitzone.in</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FitZone</span>
          <span>Train hard. Recover smart. Repeat.</span>
        </div>
      </div>
    </footer>
  );
}
