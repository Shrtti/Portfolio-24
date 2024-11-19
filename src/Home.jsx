import React from "react";
import "./Home.css";
import backgroundImage from './assets/student.jpg';

const Home = () => {
  return (
    <section id="home" className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-content">
        <h1>Hi, I'm Shruti Natekar</h1>
        <p>I'm a student who enjoys learning new things.</p><br></br><br></br>
        <a href="/contact" className="cta-btn">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;
