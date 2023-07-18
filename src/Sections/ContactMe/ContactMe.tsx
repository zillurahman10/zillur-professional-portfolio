import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-info">
          <h2
            style={{
              fontSize: "50px",
              color: "lime",
            }}
          >
            Contact Me
          </h2>
          <p>Please feel free to get in touch with me using the form below.</p>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </form>

          <button
            type="submit"
            className="glow-btn"
            style={{
              width: "400px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
