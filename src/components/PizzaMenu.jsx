import React from 'react';
import { motion } from 'framer-motion';

const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    desc: 'Tomato sauce, Mozzarella cheese, oregano and fresh basil.',
    priceReg: 'RS1200',
    priceMed: 'RS1800',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: 2,
    name: 'Pepperoni Fiesta',
    desc: 'Classic tomato sauce, double mozzarella, premium pepperoni, and a touch of chili.',
    priceReg: 'RS1200',
    priceMed: 'RS1800',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Margherita',
    desc: 'Tomato sauce, Mozzarella cheese, oregano and fresh basil.',
    priceReg: 'RS1200',
    priceMed: 'RS1800',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: 4,
    name: 'Pepperoni Fiesta',
    desc: 'Classic tomato sauce, double mozzarella, premium pepperoni, and a touch of chili.',
    priceReg: 'RS1200',
    priceMed: 'RS1800',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop'
  }
];

const PizzaMenu = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/food.png')",
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 md:mb-24 flex flex-col items-center justify-center px-4">
        <span className="text-[#cda365] text-xs md:text-base tracking-[0.2em] font-semibold uppercase mb-2 md:mb-3">
          Ristorante
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase flex items-center gap-3 md:gap-6 drop-shadow-lg">
          <span className="text-xl md:text-3xl">★</span> 
          Pizza Menu 
          <span className="text-xl md:text-3xl">★</span>
        </h2>
        <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6">
          <div className="h-px w-8 md:w-20 bg-[#cda365]"></div>
          <span className="text-[#cda365] text-[8px] md:text-xs tracking-[0.25em] font-bold uppercase">
            Our Best Selections
          </span>
          <div className="h-px w-8 md:w-20 bg-[#cda365]"></div>
        </div>
      </div>

      {/* Pizza Items */}
      <div className="relative z-10 max-w-350 mx-auto flex flex-col gap-20 md:gap-32">
        {pizzas.map((pizza, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={pizza.id} 
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center w-full max-w-6xl mx-auto overflow-hidden px-4 md:p-4`}
            >
              
              {/* Image Side - Responsive sizing & safer animation offset */}
              <div className="w-full md:w-1/2 flex justify-center items-center relative mb-8 md:mb-0">
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -100 : 100, rotate: isEven ? -90 : 90 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
                  className="relative w-62.5 h-62.5 sm:w-[320px] sm:h-80 md:w-100 md:h-100 lg:w-112.5 lg:h-112.5"
                >
                  <img 
                    src={pizza.image} 
                    alt={pizza.name} 
                    className="w-full h-full object-cover rounded-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                  />
                </motion.div>
              </div>

              {/* Text Side - Centered on mobile */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className={`w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left px-2 sm:px-12`}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3 md:mb-4 tracking-wide">
                  {pizza.name}
                </h3>
                
                <p className="text-gray-300 italic font-serif text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-10 max-w-lg">
                  {pizza.desc}
                </p>
                
                <div className="flex flex-col gap-3 md:gap-4 w-full max-w-sm">
                  {/* Regular Size Box */}
                  <div className="flex items-center justify-center md:justify-start gap-4 md:gap-8">
                    <div className="border border-gray-600 px-4 md:px-6 py-2 md:py-2.5 w-32 md:w-40 text-center">
                      <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-semibold">Regular Size</span>
                    </div>
                    <span className="text-2xl md:text-3xl font-serif text-white">{pizza.priceReg}</span>
                  </div>

                  {/* Medium Size Box */}
                  <div className="flex items-center justify-center md:justify-start gap-4 md:gap-8">
                    <div className="border border-gray-600 px-4 md:px-6 py-2 md:py-2.5 w-32 md:w-40 text-center">
                      <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-semibold">Medium Size</span>
                    </div>
                    <span className="text-2xl md:text-3xl font-serif text-white">{pizza.priceMed}</span>
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