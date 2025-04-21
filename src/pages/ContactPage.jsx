import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FiMail className="icon" />
            </div>
            <h3>Email Us</h3>
            <p>support@noircommerce.com</p>
            <p>sales@noircommerce.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FiPhone className="icon" />
            </div>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri: 9am-5pm EST</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FiMapPin className="icon" />
            </div>
            <h3>Visit Us</h3>
            <p>123 Noir Avenue</p>
            <p>New York, NY 10001</p>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="What's this about?" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
