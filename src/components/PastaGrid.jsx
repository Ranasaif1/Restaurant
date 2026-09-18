import React from 'react';
import { motion } from 'framer-motion';

const pastas = [
  { id: 1, name: 'Bolognese', price: 'Rs. 4,500', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Carbonara', price: 'Rs. 5,200', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Seafood Pasta', price: 'Rs. 6,500', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Pesto Penne', price: 'Rs. 4,000', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400&auto=format&fit=crop' },
];

// Motion container for the grid to handle staggered child animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Delay between each pasta dish appearing
    }
  }
};

// Motion variants for individual grid items
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const PastaGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] text-white">
      
      {/* Animated Header */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <span className="text-[#cda365] text-[10px] md:text-sm tracking-[0.3em] font-semibold uppercase">
          Tasty Format
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-2 tracking-widest uppercase">
          Fresh Pasta
        </h2>
      </div>

      {/* Animated Grid Container */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {pastas.map((pasta) => (
          <React.Fragment key={pasta.id}>
            {/* Animated Item Card */}
            <motion.div
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4 rounded-sm shadow-lg">
                <img
                  src={pasta.image}
                  alt={pasta.name}
                  // Image height adjusted for mobile to not look overly stretched
                  className="w-full h-56 sm:h-60 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <h3 className="text-base md:text-lg font-serif tracking-wide">{pasta.name}</h3>
                <span className="text-[#cda365] font-serif font-medium tracking-wide">{pasta.price}</span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 mt-2 italic">Traditional Italian Recipe</p>
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};

export default PastaGrid;