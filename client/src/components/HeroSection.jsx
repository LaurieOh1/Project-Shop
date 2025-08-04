import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/homepage/20250610_1037_Elegant Portrait Silhouette_remix_01jxcfpjqwemxvznh38j7j0amg.png";
import "../components/styleComponent/HeroSection.css"; 

const HeroSection = () => {
  const [progress, setProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;

      if (scrollTop >= maxScroll) {
        setProgress(1);
        setIsLocked(true);
      } else {
        const current = scrollTop / maxScroll;
        setProgress(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Hero area with scroll transform */}
      <div className="sticky top-0 h-screen w-full flex z-10">
        {/* Left: Image */}
        <div
          className="bg-cover bg-center transition-all duration-500 ease-out"
          style={{
            backgroundImage: `url(${heroImage})`,
            width: isLocked ? "50vw" : `${100 - progress * 50}vw`,
            height: "100vh",
          }}
        />

        {/* Right: Text section */}
        <div
          className={`flex items-center justify-center transition-all duration-500 ease-out ${
            isLocked
              ? "w-1/2 h-full bg-terra text-white"
              : "absolute inset-0 text-white"
          }`}
        >
          <div className="text-center max-w-xl px-6 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Celebrate Every Curl
            </h1>
            <p className="text-lg md:text-xl">
              Amur brings you premium hair care tailored for Afro-textured beauty — clean, nourishing, and made with intention.
            </p>
            <Link
              to="/products"
              className={`inline-block mt-4 px-6 py-3 text-lg rounded-full transition ${
                isLocked
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-300"
              }`}
            >
              Shop Best Sellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
