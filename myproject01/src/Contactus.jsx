import React, { useState } from 'react';
import Navbar from './AdminNavbar';
import Footer from './Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for contacting StaffSync our team will get in touch with you shortly...')
    setFormData({ name: '', email: '', message: '' });// Reset form
  };
  return (
    <div>
      <Navbar />
      <div className="contact-us">
        <h1>Contact Us</h1>
        <h3>If you have any issues please feel free to send message to us...</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
