import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/grid/20250803_1910_Afro Hair Care_remix_01k1rehfdfe9dssbch9z2pdxe4.png";
import image2 from "../assets/grid/20250803_2008_Smiling with Hair Products_remix_01k1rhvqjge2frebpprjx0ygnx.png";
import image3 from "../assets/grid/20250803_2042_African-Inspired Bowls_simple_compose_01k1rksj8bea8swsnc3kv4g2cc.png";
import image4 from "../assets/grid/20250803_2140_Styled Afro Stretch_remix_01k1rq3g00e5pr7008qrn7bn5e.png";

const gridItems = [
  { id: 1, image: image1, link: "/products/1" },
  { id: 2, image: image2, link: "/products/2" },
  { id: 3, image: image3, link: "/products/3" },
  { id: 4, image: image4, link: "/products/4" },
];

const FeatureGrid = () => {
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!hasRevealed && window.scrollY > window.innerHeight / 3) {
        setHasRevealed(true);
      }
    };

    setHasRevealed(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`w-full min-h-screen grid grid-cols-1 md:grid-cols-2 transition-opacity duration-1000 ${
        hasRevealed ? "opacity-100" : "opacity-0"
      }`}
    >
      {gridItems.map((item) => (
        <div
          key={item.id}
          className="relative w-full aspect-square flex items-center justify-center bg-white group border overflow-hidden"
        >
          <img
            src={item.image}
            alt={`Feature ${item.id}`}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
            <div className="flex items-center justify-center h-full">
              <Link
                to={item.link}
                className="bg-white text-black px-4 py-2 rounded font-semibold shadow"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureGrid;

