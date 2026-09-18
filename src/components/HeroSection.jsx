import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Warm & Catchy */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ 
          // Note: Tum yahan exact apni screenshot wali image ka path daal sakte ho (jaise '/pizza-bg.jpg')
          backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')", 
        }}
      >
        {/* Vignette Overlay (Darker edges, lighter center for text readability) */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      </div>

      {/* Top Navigation */}
      <header className="absolute top-0 left-0 w-full px-8 py-8 flex justify-between items-center z-10 text-white text-[11px] font-bold tracking-[0.15em] uppercase">
        
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="hover:text-[#cda365] transition-colors flex items-center gap-1">
            Home 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>
          <a href="#" className="hover:text-[#cda365] transition-colors">About</a>
          <a href="#" className="hover:text-[#cda365] transition-colors">Our Menu</a>
          <a href="#" className="hover:text-[#cda365] transition-colors flex items-center gap-1">
            Contact
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>
          <a href="#" className="hover:text-[#cda365] transition-colors">Shop</a>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-5xl font-serif font-bold text-white tracking-widest drop-shadow-md">
          P.
        </div>

        {/* Right Nav (Socials, Cart, Button) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-5 items-center mr-2">
            {/* Social Icons SVGs */}
            <a href="#" className="hover:text-[#cda365] transition-colors"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a>
            <a href="#" className="hover:text-[#cda365] transition-colors"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a>
            <a href="#" className="hover:text-[#cda365] transition-colors"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          </div>
          
          {/* Cart Icon */}
          <a href="#" className="hover:text-[#cda365] transition-colors pr-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </a>

          {/* Order Button */}
          <button className="border border-white px-6 py-2.5 hover:bg-white hover:text-black transition-colors duration-300 tracking-[0.2em]">
            ORDER ONLINE
          </button>
        </div>
      </header>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center mt-12 px-4 text-center">
        {/* Welcome Text with Side Lines */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-[#cda365]"></div>
          <span className="text-[#cda365] text-xs md:text-[13px] tracking-[0.2em] font-bold uppercase">
            Welcome To
          </span>
          <div className="h-[1px] w-12 bg-[#cda365]"></div>
        </div>

        {/* Main Title (Perfect Serif & Drop Shadow) */}
        <h1 
          className="text-6xl md:text-[6rem] font-serif text-white mb-6 tracking-wider leading-[1.1]" 
          style={{ textShadow: '2px 4px 15px rgba(0,0,0,0.6)' }}
        >
          PATIOTIME<br/>BISTRO
        </h1>

        {/* Subtext */}
        <p className="text-gray-100 font-medium text-sm md:text-base tracking-[0.15em] drop-shadow-md">
          Pizza. Burger. Roasted. Coffee. Wine.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;