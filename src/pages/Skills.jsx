import React from "react";
import "./Skills.css";
import { MDBIcon } from "mdb-react-ui-kit";

const Skills = () => {
  const skills = [
    
      { name: "Python", level: "Expert", icon: "fab fa-python" },
      { name: "C++", level: "Advanced", icon: "fas fa-code" },
      { name: "HTML", level: "Expert", icon: "fab fa-html5" },
      { name: "CSS", level: "Expert", icon: "fab fa-css3-alt" },
      { name: "JavaScript", level: "Expert", icon: "fab fa-js-square" },
      { name: "Bootstrap", level: "Expert", icon: "fab fa-bootstrap" },
      { name: "React", level: "Beginner", icon: "fab fa-react" },
      { name: "Node.js", level: "Beginner", icon: "fab fa-node" },
      { name: "MongoDB", level: "Intermediate", icon: "fas fa-database" },
      { name: "Git", level: "Intermediate", icon: "fab fa-git-alt" },
      { name: "Django", level: "Intermediate", icon: "fab fa-python" },
      { name: "MySQL", level: "Intermediate", icon: "fas fa-database" },
    
  ];

  return (
    <section className="skills-section">
      
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={skill.icon + " skill-icon"}></i>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
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

export default Skills;
