import React from "react";
import NavBar from "./NavBar.js";
import Section from "./Section.js";
import Login from "./Login.js";
import Collections from "./Collections.js";
import Contact from "./Contact.js";
import LandingPage from "./LandingPage.js";
import ProductList from "./ProductList.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Section
        title="Shop"
        text={<ProductList/>}
        dark={false}
        id="section1"
      >
      </Section>
      <Section
        title="Collections"
        text={<Collections/>}
        dark={false}
        id="section2"
      >
      </Section>

      <Section
        title="Contact"
        text={<Contact/>}
        dark={false}
        id="section3"
      >
      </Section>
    </div>
  );
}

// x: 3/8
// y: 7/36