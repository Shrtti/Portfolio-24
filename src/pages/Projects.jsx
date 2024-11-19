import React from "react";
import "./Projects.css";
import Port from "./port.jpg";
import Chair from "./chair.jpg";
import HandSign from "./hand_sign.jpeg";
import Hospital from "./hospital.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built using React.js to showcase my skills, projects, and experience.",
    image: Port,
  },
  {
    title: "Posture Correction Chair",
    description: "Detection of the spine's depth with an ultrasonic sensor using Arduino Uno and alerting users when their posture deviates.",
    image: Chair,
  },
  {
    title: "Translation of Indian Sign Language (ISL)",
    description: "Recording the hand gestures done by users and converting into Indian Sign Language and display the text.",
    image: HandSign,
  },
  {
    title: "Online Hospital Appointment System",
    description: "A system for patients who can book appointments to different hospitals using an online platform.",
    image: Hospital,
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
