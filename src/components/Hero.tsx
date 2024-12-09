import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/93YTjMj/Ivana-bgweb.jpg")',
        }}
        role="img"
        aria-label="Ivana House of Beauty Background"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
            Welcome to Ivana House of Beauty
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            Where luxury meets transformation
          </p>
          <a
            href="tel:096002159"
            className="inline-block px-8 py-3 bg-[#D4B098] text-white rounded hover:bg-[#1A1A1A] transition duration-300"
            aria-label="Call Ivana House of Beauty to Book an Appointment"
          >
            Book An Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
