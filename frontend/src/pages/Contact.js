import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you</p>
      </section>

      {/* Contact Grid */}
      <div className="contact-grid">
        {/* Contact Form */}
        <section className="contact-form">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Address</h3>
              <p>123 Service Lane, Udupi, Karnataka 576101</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>contact@apnaservices.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaClock className="info-icon" />
            <div>
              <h3>Working Hours</h3>
              <p>Monday-Saturday: 8AM - 8PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;