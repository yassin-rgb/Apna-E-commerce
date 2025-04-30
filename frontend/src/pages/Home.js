import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // We'll create this CSS file

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero carousel images
  const slides = [
    {
      title: "Premium Services at Your Doorstep",
      subtitle: "Book trusted professionals in minutes",
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "24/7 Emergency Support",
      subtitle: "We're always here when you need us",
      bg: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Carousel */}
      <div 
        className="hero-section"
        style={{ background: slides[currentSlide].bg }}
      >
        <div className="hero-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <Link to="/services" className="cta-button">
            Explore Services
          </Link>
        </div>
        <div className="slide-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          {[
            { icon: '⏱️', title: "Fast Response", text: "Under 30 minute guarantee" },
            { icon: '💰', title: "Fair Pricing", text: "No hidden charges" },
            { icon: '🛡️', title: "Verified Pros", text: "Background-checked experts" },
            { icon: '⭐', title: "5-Star Service", text: "Rated 4.9/5 by customers" }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-slider">
          {[
            { name: "Rahul K.", quote: "Fixed my AC in 20 minutes!" },
            { name: "Priya M.", quote: "Fair prices and professional service." },
            { name: "Vikram S.", quote: "Will definitely book again." }
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>" {testimonial.quote} "</p>
              <span>- {testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="cta-section">
        <h2>Ready to Experience Premium Service?</h2>
        <Link to="/services" className="cta-button secondary">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Home;