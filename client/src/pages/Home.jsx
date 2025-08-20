import React from "react";

import HeroSection from "../components/HeroSection";
import GridMotion from "../components/GridMotion";
import BestSellerCarousel from "../components/BestSellerCarousel";
import FeatureGrid from "../components/FeaturedGrid";

import img3 from "../assets/gridBackground/pexels-ben-iwara-1033992193-29637186.jpg";
import img4 from "../assets/gridBackground/pexels-god-picture-369194295-14470153.jpg";
import img5 from "../assets/gridBackground/pexels-nappy-935985 (1).jpg";
import img6 from "../assets/gridBackground/pexels-reyna-montgomery-229756504-12093796.jpg";

const Home = () => {
  // only images here
  const baseImages = [img3, img4, img5, img6];

  // fill up to 28 tiles by repeating
  const items = Array.from(
    { length: 28 },
    (_, i) => baseImages[i % baseImages.length]
  );

  return (
    <>
      <HeroSection />
      
      <GridMotion items={items} />
      <BestSellerCarousel />
      <div className="flex justify-center items-center my-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
      </div>
      <div className="flex justify-center items-center mb-8">
        <p className="text-gray-600">Explore our top picks for you</p>
      </div>
      <FeatureGrid />
  

    </>
  );
};
export default Home;
