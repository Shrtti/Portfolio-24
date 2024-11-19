import React from "react";
import "./About.css";
import profileImage from "./student_1.jpg"; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm Shruti Natekar, I am a third year engineering student in PVG COET 
            studying Computer Engineering. I am one of the heads of ACES' Design & 
            Production Team and a member of VLABs. 
          </p>
          <p>
            I enjoy exploring new technologies, solving problems, and sharing knowledge
            through community contributions. Recently I have developed keen interest
            in Web Development.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr className="about-line"></hr>
    </section>
  );
};

export default About;
