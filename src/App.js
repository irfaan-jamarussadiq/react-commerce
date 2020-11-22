import React from "react";
import NavBar from "./NavBar.js";
import LandingPage from "./LandingPage.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}