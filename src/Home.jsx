import React from "react";
import "./Home.css";
import backgroundImage from './assets/student.jpg';

const Home = () => {
  return (
    <section id="home" className="home" style={{ backgroundImage: `url(${backgroundImage})`, width:"100%"}}>
      <div className="home-content">
        <h1>Hi,<br></br> I'm Shruti Natekar</h1>
        <br></br><br></br>
        
        <a href="/contact" className="cta-btn">Connect With Me</a>
      </div>
    </section>
  );
};

export default Home;
