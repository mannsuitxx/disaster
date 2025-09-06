import React, { useState } from "react";
import { Link } from "react-router-dom";
import PulseAI from "./PulseAI";

function Navbar() {
  const [showAI, setShowAI] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex gap-4">
          <Link to="/">Dashboard</Link>
          <Link to="/modules">Modules</Link>
          <Link to="/drills">Drills</Link>
          <Link to="/alerts">Alerts</Link>
          <div className="relative group">
            <span className="cursor-pointer">Games ▾</span>
            <div className="absolute hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow">
              <Link className="block" to="/games/earthquake">Earthquake Quiz</Link>
              <Link className="block" to="/games/flood">Flood Escape</Link>
              <Link className="block" to="/games/fire">Fire Safety Match</Link>
              <Link className="block" to="/games/gobag">Go-Bag Challenge</Link>
              <Link className="block" to="/games/drillsim">Drill Simulator</Link>
            </div>
          </div>
        </div>
        <button onClick={() => setShowAI(!showAI)} className="bg-pink-500 px-3 py-1 rounded">
          Pulse AI
        </button>
      </div>
      {showAI && <PulseAI onClose={() => setShowAI(false)} />}
    </nav>
  );
}

export default Navbar;
