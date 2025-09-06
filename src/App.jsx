import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Modules from "./components/Modules";
import Drills from "./components/Drills";
import Alerts from "./components/Alerts";
import EarthquakeQuiz from "./components/Games/EarthquakeQuiz";
import FloodEscape from "./components/Games/FloodEscape";
import FireSafetyMatch from "./components/Games/FireSafetyMatch";
import GoBagChallenge from "./components/Games/GoBagChallenge";
import DrillSimulator from "./components/Games/DrillSimulator";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/drills" element={<Drills />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/games/earthquake" element={<EarthquakeQuiz />} />
          <Route path="/games/flood" element={<FloodEscape />} />
          <Route path="/games/fire" element={<FireSafetyMatch />} />
          <Route path="/games/gobag" element={<GoBagChallenge />} />
          <Route path="/games/drillsim" element={<DrillSimulator />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
