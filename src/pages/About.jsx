import React from "react";
import "./About.css";
import profileImage from "./student_1.jpg"; 
import resume from "./resume.pdf"; 

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
            studying Computer Engineering. I am the Joint Head of <a href="https://acespvgcoet.in/">ACES</a>' Design & 
            Production Team.
          </p>
          <p>
            I enjoy exploring new technologies, solving problems, and sharing knowledge
            through community contributions. Recently I have developed keen interest
            in Web Development.
          </p>
          <br></br>
          <br></br>
          <a href={resume} className="download-btn">
  Download Resume
</a>
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
