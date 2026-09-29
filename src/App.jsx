import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Programs from "./pages/Programs";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Join from "./pages/Join";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter basename="/Fitness-Website-Using-Bootstrap">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}