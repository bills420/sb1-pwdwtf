import React from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import Testimonials from '../components/Testimonials';
import { testimonials } from '../data/testimonials';

const About: React.FC = () => {
  return (
    <div>
      <Hero />
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are dedicated to providing the best services to our customers. 
          Our team is passionate about innovation and excellence.
        </p>
        <img src="/about-image.jpg" alt="About Us" />
      </section>
      <FeaturedServices />
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default About;
