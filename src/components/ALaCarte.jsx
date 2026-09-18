import React from 'react';
import { motion } from 'framer-motion';

const menuItems = {
  salads: [
    { name: 'Caesar Salad', price: '$12', desc: 'Romaine, croutons, parmesan' },
    { name: 'Greek Salad', price: '$14', desc: 'Feta, olives, tomatoes, cucumber' },
    { name: 'Caprese', price: '$15', desc: 'Mozzarella, tomatoes, basil' },
  ],
  mains: [
    { name: 'Grilled Salmon', price: '$32', desc: 'Asparagus, lemon butter sauce' },
    { name: 'Ribeye Steak', price: '$45', desc: 'Mashed potatoes, peppercorn sauce' },
    { name: 'Chicken Parmesan', price: '$26', desc: 'Marinara, mozzarella, pasta' },
  ]
};

// Motion variants for staggering menu items one by one
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const MenuList = ({ title, items }) => (
  <motion.div 
    className="w-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={listVariants}
  >
    <h3 className="text-2xl font-serif mb-8 text-[#cda365] uppercase tracking-widest">{title}</h3>
    <div className="flex flex-col gap-6">
      {items.map((item, idx) => (
        <motion.div key={idx} variants={itemVariants} className="flex flex-col group">
          <div className="flex items-end justify-between w-full">
            <span className="text-lg font-serif tracking-wide whitespace-nowrap bg-[#0a0a0a] pr-2 group-hover:text-[#cda365] transition-colors duration-300">
              {item.name}
            </span>
            <div className="grow border-b border-dotted border-gray-700 mb-1.5 mx-2 opacity-50"></div>
            <span className="text-lg text-[#cda365] font-serif bg-[#0a0a0a] pl-2">
              {item.price}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1 italic">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ALaCarte = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      
      {/* Animated Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 flex flex-col items-center px-4"
      >
        <span className="text-[#cda365] text-xs md:text-sm tracking-[0.2em] font-semibold uppercase mb-3">
          Main Course
        </span>
        <h2 className="text-4xl md:text-5xl font-serif mt-2 tracking-widest uppercase flex items-center gap-4 drop-shadow-lg">
          <span className="text-2xl text-gray-700">★</span>
          À La Carte
          <span className="text-2xl text-gray-700">★</span>
        </h2>
      </motion.div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <MenuList title="Salads" items={menuItems.salads} />
        <MenuList title="Mains" items={menuItems.mains} />
      </div>
      
      {/* Animated Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-center mt-20"
      >
        <button className="bg-transparent border border-[#cda365] text-[#cda365] hover:bg-[#cda365] hover:text-white transition-colors duration-300 px-10 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold">
          View Full Menu
        </button>
      </motion.div>
    </section>
  );
};

export default ALaCarte;