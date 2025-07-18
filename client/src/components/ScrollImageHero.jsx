import React, { useEffect, useState } from 'react';
import img from '../assets/hairProductsetting.webp'; // Replace with your image path

const ScrollImageHorizontalReveal = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clamp width from 50vw (square-like) to 100vw
  const width = Math.min(100, 50 + scrollY / 10); // Expand as you scroll
  const textColor = width >= 100 ? 'text-black' : 'text-white';

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
      <div className="h-[200vh] bg-black w-full"></div>
    </section>
  );
};

export default ScrollImageHorizontalReveal;
