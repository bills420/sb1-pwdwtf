import React from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import Testimonials from '../components/Testimonials';
import { testimonials } from '../data/testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default Home;