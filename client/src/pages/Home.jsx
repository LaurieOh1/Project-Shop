import React from "react";
import ScrollImageHero from "../components/ScrollImageHero";
import HeroSection from "../components/HeroSection";



const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Scroll-enhanced visual experience section */}
      <ScrollImageHero />

      {/* Other homepage content like best sellers, etc. */}
     
    </>
  );
};
export default Home;