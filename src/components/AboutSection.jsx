import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Image with Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative h-125 md:h-150 w-full"
        >
          {/* Main Image */}
          <img 
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop" 
            alt="Chef preparing food" 
            className="w-full h-full object-cover rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          />
          
          {/* Decorative Gold Frame (Offset) */}
          <div className="absolute -inset-4 border border-[#cda365]/30 -z-10 hidden md:block"></div>
          
          {/* Floating Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-8 -right-8 bg-[#0a0a0a] border border-[#cda365] p-6 text-center hidden md:block shadow-2xl"
          >
            <span className="block text-4xl font-serif text-[#cda365] mb-1">15</span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-gray-300 leading-relaxed">
              Years of <br/> Experience
            </span>
          </motion.div>
        </motion.div>

        {/* Right Side - Story Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:pl-8 mt-8 md:mt-0"
        >
          {/* Section Subtitle */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#cda365] text-xs md:text-sm tracking-[0.2em] font-semibold uppercase">
              Discover Our Story
            </span>
            <div className="h-px w-12 bg-[#cda365]"></div>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-widest uppercase mb-8 leading-[1.2]">
            A Passion for <br/> <span className="text-gray-500">Culinary</span> Art.
          </h2>
          
          {/* Emphasized Intro */}
          <p className="text-[#cda365] italic font-serif text-lg md:text-xl leading-relaxed mb-6">
            Founded in the heart of the city, Patiotime Bistro brings together traditional Italian recipes and modern culinary techniques. 
          </p>
          
          {/* Detailed Body Text */}
          <p className="text-sm md:text-base text-gray-400 leading-loose mb-10">
            Our chefs carefully select the freshest local ingredients to craft dishes that not only taste extraordinary but tell a story. Whether you're here for a quick espresso, a casual burger, or a fine wine evening, we promise an unforgettable dining experience wrapped in a warm, inviting atmosphere.
          </p>

          {/* Chef Signature Area */}
          <div className="flex items-center gap-6">
            {/* Fake Signature Image (Inverted for dark theme) */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
              alt="Chef Signature" 
              className="h-10 invert opacity-60"
            />
            <div className="border-l border-gray-700 pl-6">
              <span className="block text-white font-serif text-lg tracking-wide">Marco Rossi</span>
              <span className="block text-[#cda365] text-[10px] tracking-widest uppercase mt-1">Master Chef</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutSection;