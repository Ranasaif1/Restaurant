import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PizzaMenu from '../components/PizzaMenu';
import PastaGrid from '../components/PastaGrid';
import ALaCarte from '../components/ALaCarte';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <HeroSection />
      <AboutSection />
      <PizzaMenu />
      <PastaGrid />
      <ALaCarte />
      <Footer />
    </div>
  );
};

export default Home;