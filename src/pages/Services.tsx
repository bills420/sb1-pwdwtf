import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="pt-20">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-20 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif text-primary mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of luxury beauty treatments designed to enhance your natural beauty
              and provide a relaxing, rejuvenating experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-primary mb-4">Book Your Treatment</h2>
            <p className="text-gray-600 mb-8">
              Ready to experience luxury beauty treatments? Book your appointment today.
            </p>
            <motion.a
              href="/booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-secondary text-white rounded hover:bg-primary transition duration-300"
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;