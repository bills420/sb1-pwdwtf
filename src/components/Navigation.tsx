import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book Now', href: '/booking', isButton: true },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif text-primary">
            <img
                  src="https://i.ibb.co/h1QT7p3/ivanablacktrans.png"
                  alt="IVANA"
                  className="w-32"
                />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="tel:095922159" 
              className="flex items-center text-sm text-gray-600 hover:text-secondary transition"
            >
              <Phone size={16} className="mr-2" />
              09 600 2159
            </a>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={item.isButton 
                  ? "px-6 py-2 bg-primary text-white rounded hover:bg-black/80 transition"
                  : "text-gray-800 hover:text-secondary transition"}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base ${
                    item.isButton 
                      ? "bg-primary text-white rounded"
                      : "text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;