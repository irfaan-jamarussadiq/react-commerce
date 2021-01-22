import React from "react";
import NavBar from "./NavBar.js";
import Section from "./Section.js";
import Collections from "./Collections.js";
import Contact from "./Contact.js";
import LandingPage from "./LandingPage.js";
import Shop from "./Shop.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Section
        title="Shop"
        content={<Shop/>}
        dark={false}
        id="section1"
      >
      </Section>
      <Section
        title="Collections"
        content={<Collections/>}
        dark={false}
        id="section2"
      >
      </Section>

      <Section
        title="Contact"
        content={<Contact/>}
        dark={false}
        id="section3"
      >
      </Section>
    </div>
  );
}