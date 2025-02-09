import React from "react";
import "./experience.css";
import BRC from "./BRC.png";
import utos from "./utos.jpg";


const experience = [
  {
    title: "BRC Pune",
    role: "Web Developer Intern",
    duration:"January 2025 – Present",
    description: [ 
                 "Developed and managed a website for BRC Pune using WordPress, ensuring a user-friendly interface and seamless functionality",
                 "Customized themes, configured plugins, and implemented design improvements to meet organizational requirements",
                 "Collaborated with stakeholders to gather feedback and make iterative updates for optimal performance"
    ],
    image: BRC,
  },
  {
    title: "UpToSkills",
    role: "MERN Stack Intern",
    duration:"November 2024 – February 2025",
    description: [ 
                 "Contributed to the development of AI Interview full-stack project using the MERN stack",
                 "Enhanced project efficiency by optimizing code structure, improving API performance, and implementing best practices in software development",
                 "Led a team and assigned tasks which included implementing frontend features, developing RESTful APIs, and integrating the backend with the database"
    ],
    image: utos,
  },  
];

const Experience = () => {
  return (
    <section className="exp-section" id="exp">
      <h2 className="exp-title">Professional Experience</h2>
      <div className="exp-container">
        {experience.map((exp, index) => (
          <div key={index} className="exp-card">
            <img
              src={exp.image}
              alt={exp.title}
              className="exp-image"
            />
            <div className="exp-content">
              <h3 className="exps-title">{exp.title}</h3>
              <p className="exp-role">&nbsp;<b>Role:</b> {exp.role}</p>
              <p className="exp-duration">&nbsp;<b>Duration:</b> {exp.duration}</p>
              <ul className="exp-description">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
