import React from "react";
import "./Contact.css";
import contact from "./contact_me.jpg";
import resume from "./resume.pdf";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Connect with Me</h2>
      <div className="contact-icons">
          <a
            href="mailto:snatekar03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shruti-natekar-a013b228a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Shrtti"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-github"></i>
          </a>
      </div>
      
    </section>
  );
};

export default Contact;
