import React from 'react';
import { Sparkles } from 'lucide-react';

const FeaturedServices = () => {
  const services = [    {
    icon: <Sparkles className="w-8 h-8 text-[#D4B098]" />,
    title: 'Hair Services',
    description: 'Stylish cuts, vibrant colors, deep conditioning, sleek blowouts, updos.',
    image: 'https://images.pexels.com/photos/13714794/pexels-photo-13714794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
,
{
  icon: <Sparkles className="w-8 h-8 text-[#D4B098]" />,
  title: 'Luxury Facials',
  description: 'Rejuvenate your skin with our signature facial treatments',
  image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
},
    {
      icon: <Sparkles className="w-8 h-8 text-[#D4B098]" />,
      title: 'Beauty Treatments',
      description: 'Complete beauty services for a radiant appearance',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#D4B098]" />,
      title: 'Advanced Skincare',
      description: 'Personalized treatments for your unique skin needs',
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#D4B098]" />,
      title: 'Body Massage',
      description: 'Experience deep relaxation with our soothing, rejuvenating body massage.',
      image: 'https://media.istockphoto.com/id/1098208904/photo/im-moving-in-starting-from-today.webp?b=1&s=170667a&w=0&k=20&c=Rm-tyEC8r4muMEDUobA_Nf-LBUehxu0seC_cucltQ-U='
    }
    ,
    {
      icon: <Sparkles className="w-8 h-8 text-[#D4B098]" />,
      title: 'Waxing',
      description: 'Smooth, hair-free skin with our gentle and effective waxing.',
      image: 'https://plus.unsplash.com/premium_photo-1661431392914-e3fc8ff0e51a?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    ,
    {
      icon: <Sparkles className="w-8 h-8 text-[#D4B098]" />,
      title: 'Keratin Treatment',
      description: 'Transform frizzy, unruly hair into smooth, shiny locks with our keratin treatment.',
      image: 'https://shorthillsderm.com/wp-content/uploads/bfi_thumb/short-hills-derm-the-pros-and-cons-of-keratin-treatments-17g336ux0ecxdz277glocaigbhg96s10bprjsgrpv79vgzo2.jpg'
    }
    ,
    {
      icon: <Sparkles className="w-8 h-8 text-[#D4B098]" />,
      title: 'Threading Hair Removal',
      description: 'Precise, gentle hair removal with threading for smooth, defined skin.',
      image: 'https://under-tec.com/wp-content/uploads/2023/08/how-to-do-threading-hair-removal-1691153803.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Our Featured Services</h2>
          <p className="text-gray-600">Experience the ultimate in beauty and wellness</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;