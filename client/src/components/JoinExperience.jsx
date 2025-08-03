import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import leftImg from "../assets/homepage/20250610_1037_Elegant Portrait Silhouette_remix_01jxcfpjqwemxvznh38j7j0amg.png";
import rightImg from "../assets/homepage/20250610_1047_Product Design Recreation_remix_01jxcg9fxpenk8qb35khmra7ef.png"; 

function JoinExperience() {
  const [showSideImage, setShowSideImage] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSideImage(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center mb-4"
        style={{ backgroundImage: `url(${leftImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center px-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to Amur
            </h1>
            <p className="text-xl md:text-2xl">Afro hair care crafted for you.</p>
            <Link
              to="/products"
              className="inline-block mt-4 px-6 py-3 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-200 transition duration-300"
            >
              Join the Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Trigger Scroll Section */}
      <div ref={triggerRef} className="h-[50vh] relative">
        {showSideImage && (
          <img
            src={rightImg}
            alt="Additional Product"
            className="w-64 h-auto rounded-lg shadow-lg absolute right-8 top-1/4 transition-all duration-700 opacity-0 animate-fade-in-right"
          />
        )}
      </div>
    </>
  );
}

export default JoinExperience;
