import React from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Congratulationpage from "./pages/congratulationpage/Congratulationpage";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/register/Register" element={<Register />} />
          <Route
            path="/pages/congratulationpage/congratulationpage"
            element={<Congratulationpage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
