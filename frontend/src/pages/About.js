import { FaAward, FaUsers, FaProjectDiagram, FaHandshake, FaClock, FaRupeeSign } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Delivering excellence since 2023</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {[
            { icon: <FaHandshake />, title: "Integrity", desc: "Honest and transparent service" },
            { icon: <FaClock />, title: "Reliability", desc: "On-time, every time" },
            { icon: <FaRupeeSign />, title: "Fair Pricing", desc: "No hidden charges" }
          ].map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <FaAward className="stat-icon" />
          <h3>5+ Years</h3>
          <p>Combined Experience</p>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>500+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <FaProjectDiagram className="stat-icon" />
          <h3>50+</h3>
          <p>Services Offered</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to experience our service?</h2>
        <button className="cta-button">Book Now</button>
      </section>
    </div>
  );
};

export default About;