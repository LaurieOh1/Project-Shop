import React, { useEffect, useState } from 'react';
import img from '../assets/products&sceneries/20250801_1535_Product Set Display_remix_01k1jxef5nev0t33828ngw4jbd.png';
import BestSellerCarousel from '../components/BestSellerCarousel';
import FeatureGrid from '../components/FeaturedGrid';

const ScrollImageHorizontalReveal = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start at 50vw, expand slowly to 100vw
  const width = Math.min(100, 50 + scrollY / 25); // ← slower reveal
  const textColor = width >= 90 ? 'text-white' : 'text-black';

  return (
    <section className="relative w-full overflow-hidden scroll-smooth mt-1">
      {/* Expanding image container */}
      <div
        className="mx-auto h-[100vh] transition-all duration-500 ease-out overflow-hidden"
        style={{
          width: `${width}vw`,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Centered Text */}
        <div
          className={`flex items-center justify-center h-full w-full transition-colors duration-300 ${textColor}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center px-4">
            Join the Amur Experience
          </h1>
        </div>
      </div>

      {/* Scroll zone with carousel */}
      <div >
        <BestSellerCarousel />
        <FeatureGrid />
      </div>
    </section>
  );
};

export default ScrollImageHorizontalReveal;
