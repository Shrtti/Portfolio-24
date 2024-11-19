import React from "react";
import "./Contact.css";
import contact from "./contact_me.jpg";
import resume from "./resume.pdf";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact me</h2>
      <div className="contact-container">
        <img src={contact} alt="Contact Me" className="contact-image" />
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">
              <i className="fas fa-user"></i>
              Name
            </label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
              Email
            </label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <i className="fas fa-comment-dots"></i>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
          <button type="button" className="contact-button">
            <a href={resume} download="Shruti_Natekar_Resume.pdf">
              Download Resume
            </a>
          </button>

          <br></br>
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
