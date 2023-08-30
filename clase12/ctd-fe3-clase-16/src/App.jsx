import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contacto from "./Contacto";
import Beer from "./Beer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/beer/:id" element={<Beer />} />
      </Routes>
    </Router>
  );
}

export default App;

