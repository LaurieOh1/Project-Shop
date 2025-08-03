import React, { useEffect, useState } from 'react';
import img from '../assets/products&sceneries/20250801_1535_Product Set Display_remix_01k1jxef5nev0t33828ngw4jbd.png'; // Replace with your image path
import BestSellerCarousel from '../components/BestSellerCarousel';

const ScrollImageHorizontalReveal = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const width = Math.min(100, 50 + scrollY / 10); 
  const textColor = width >= 100 ? 'text-white' : 'text-black';

  return (
    <section className="relative w-full overflow-hidden">
      {/* Expanding image container */}
      <div
        className="mx-auto h-[100vh] transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          width: `${width}vw`,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Text over the image */}
        <div
          className={`flex items-center justify-center h-full w-full transition-colors duration-300 ${textColor}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center px-4">
            Join the Amur Experience
          </h1>
        </div>
      </div>

      {/* Black background scroll zone */}
      <div className="h-[200vh] bg-black w-full">
        <BestSellerCarousel />
      </div>
    </section>
  );
};

export default ScrollImageHorizontalReveal;
