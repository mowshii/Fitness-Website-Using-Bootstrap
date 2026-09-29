import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    ["/", "Home"],
    ["/workouts", "Workouts"],
    ["/programs", "Programs"],
    ["/trainers", "Trainers"],
    ["/membership", "Membership"],
    ["/contact", "Contact"],
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fitness-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand brand-mark" to="/">
          FIT<span>ZONE</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#fitzoneNav"
          aria-controls="fitzoneNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="fitzoneNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map(([path, label]) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link ${location.pathname === path ? "active" : ""}`}
                  to={path}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link className="lime-btn lime-btn-sm" to="/join">
                Start Training <span>↗</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
