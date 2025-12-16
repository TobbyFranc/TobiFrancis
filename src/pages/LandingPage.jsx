// src/pages/LandingPage.jsx
import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "../components/Nav";
import BlogSection from "./BlogSection"; 

const LandingPage = () => {
  return (
    <div className="bg-[var(--main-bg-color)]">
      <Nav />
      <Home />
      <About />
      <Projects />
      <BlogSection />

      {/* <Work /> */}
      <Contact />
    </div>
  );
};

export default LandingPage;
