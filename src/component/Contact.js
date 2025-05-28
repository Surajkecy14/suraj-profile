import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    // You can add form submission logic here (e.g., send data to email or backend)
    setFormData({name: '', email: '', message: ''});
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
        />

        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: surajkecy14@gmail.com</p>
        <p>Phone: +977-9767271161</p>
        <p>Location: Kathmandu, Nepal</p>
      </div>
    </section>
  );
};

export default Contact;
