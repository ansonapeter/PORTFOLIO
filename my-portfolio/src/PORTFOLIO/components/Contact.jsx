import React, { useRef } from "react";
import "../index.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
     "service_0ri788e",
      "template_oyi915a",
      form.current,
      "ZKmIa8nwbHWmqJt9B"
    )
    .then(
      () => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message ❌");
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>

      <div className="contact-grid">

        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>

          <div className="info-block">
            <h3>Email</h3>
            <p>ansonapeter16@gmail.com</p>
          </div>

          <div className="info-block">
            <h3>Phone</h3>
            <p>9633035327</p>
          </div>

          <div className="info-block">
            <h3>Location</h3>
            <p>Bangalore, India</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;