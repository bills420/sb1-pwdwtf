import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={service.image}
          alt={service.name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 p-6 text-white">
          <div className="mb-3">
            <Sparkles className="w-8 h-8 text-secondary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-white/80 mb-2">{service.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-secondary font-semibold">{service.price}</span>
            <span className="text-white/70">{service.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;