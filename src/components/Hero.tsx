import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6">
            Welcome to Ivana House of Beauty
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            Where luxury meets transformation
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-3 bg-[#D4B098] text-white rounded hover:bg-[#1A1A1A] transition duration-300"
          >
            Book Your Experience
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;