import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:096002159" className="hover:text-secondary transition">09 600 2159</a>
              </p>
              <p className="flex items-center">
                <MapPin size={16} className="mr-2" />
                14 Delta Avenue, New Lynn, Auckland 1026
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Working 7 Days</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Clock size={16} className="mr-2" />
                Mon - Sun: 10:00 AM - 6:00 PM
              </p>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="https://www.instagram.com/ivanabeauty.nz" className="hover:text-secondary transition">Instagram</a>
              <a href="https://www.facebook.com/ivanabeauty.nz" className="hover:text-secondary transition">Facebook</a>
            </div>
          </div>
        </div>

        

        <div className="flex justify-center items-center mt-8">
          <img
            src="https://i.ibb.co/w7qSSJj/We-Accept1.png"
            alt="weaccept"
            className="h-16"
          />
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ivana House of Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
