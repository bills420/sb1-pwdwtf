import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/93YTjMj/Ivana-bgweb.jpg")',
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
  href="tel:096002159"
  className="inline-block px-8 py-3 bg-[#D4B098] text-white rounded hover:bg-[#1A1A1A] transition duration-300"
>
  Book An Appoinment
</a>

        </div>
      </div>
    </div>
  );
}

export default Hero;