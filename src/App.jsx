import React from "react";
import Navbar from "./navbar.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./Home.jsx";
import Footer from "./footer.jsx";
import "./Index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="sections">
      
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
