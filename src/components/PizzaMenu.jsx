import React from 'react';
import { motion } from 'framer-motion';

const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    desc: 'Tomato sauce, Mozzarella cheese, oregano and fresh basil.',
    priceReg: '$29',
    priceMed: '$35',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: 2,
    name: 'Pepperoni Fiesta',
    desc: 'Classic tomato sauce, double mozzarella, premium pepperoni, and a touch of chili.',
    priceReg: '$32',
    priceMed: '$39',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Margherita',
    desc: 'Tomato sauce, Mozzarella cheese, oregano and fresh basil.',
    priceReg: '$29',
    priceMed: '$35',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: 4,
    name: 'Pepperoni Fiesta',
    desc: 'Classic tomato sauce, double mozzarella, premium pepperoni, and a touch of chili.',
    priceReg: '$32',
    priceMed: '$39',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop'
  }
];

const PizzaMenu = () => {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/food.png')",
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-24 flex flex-col items-center justify-center px-4">
        <span className="text-[#cda365] text-sm md:text-base tracking-[0.2em] font-semibold uppercase mb-3">
          Ristorante
        </span>
        <h2 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase flex items-center gap-4 md:gap-6 drop-shadow-lg">
          <span className="text-2xl md:text-3xl">★</span> 
          Pizza Menu 
          <span className="text-2xl md:text-3xl">★</span>
        </h2>
        <div className="flex items-center gap-4 mt-6">
          <div className="h-[1px] w-12 md:w-20 bg-[#cda365]"></div>
          <span className="text-[#cda365] text-[10px] md:text-xs tracking-[0.25em] font-bold uppercase">
            Our Best Selections
          </span>
          <div className="h-[1px] w-12 md:w-20 bg-[#cda365]"></div>
        </div>
      </div>

      {/* Pizza Items */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-24 md:gap-32">
        {pizzas.map((pizza, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={pizza.id} 
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center w-full max-w-6xl mx-auto overflow-hidden p-4`}
            >
              
              {/* Image Side - Animated on Scroll */}
              <div className="w-full md:w-1/2 flex justify-center items-center relative mb-12 md:mb-0">
                <motion.div 
                  // Initial state: hidden, pushed out of screen, and rotated
                  initial={{ opacity: 0, x: isEven ? -300 : 300, rotate: isEven ? -150 : 150 }}
                  // When in view: visible, center position, straight rotation
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  // Only animate once per scroll, triggers when 30% of element is visible
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
                  className="relative w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]"
                >
                  <img 
                    src={pizza.image} 
                    alt={pizza.name} 
                    className="w-full h-full object-cover rounded-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  />
                </motion.div>
              </div>

              {/* Text Side - Animated on Scroll */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className={`w-full md:w-1/2 flex flex-col px-6 sm:px-12`}
              >
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-wide">
                  {pizza.name}
                </h3>
                
                <p className="text-gray-300 italic font-serif text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                  {pizza.desc}
                </p>
                
                <div className="flex flex-col gap-4 max-w-sm">
                  <div className="flex items-center gap-8">
                    <div className="border border-gray-600 px-6 py-2.5 w-40 text-center">
                      <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-semibold">Regular Size</span>
                    </div>
                    <span className="text-3xl font-serif text-white">{pizza.priceReg}</span>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="border border-gray-600 px-6 py-2.5 w-40 text-center">
                      <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-semibold">Medium Size</span>
                    </div>
                    <span className="text-3xl font-serif text-white">{pizza.priceMed}</span>
                  </div>
                </div>
              </motion.div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PizzaMenu;