import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FeatureGrid.css";


// Replace these with your actual images and links
const gridItems = [
  {
    id: 1,
    image: "/assets/products&sceneries/20250728_1947_Herbal Shampoo Splash_remix_01k1920k6ye32bq61x12pp7pe7.png",
    link: "/products/1",
  },
  {
    id: 2,
    image: "/assets/pic2.jpg",
    link: "/products/2",
  },
  {
    id: 3,
    image: "/assets/pic3.jpg",
    link: "/products/3",
  },
  {
    id: 4,
    image: "/assets/pic4.jpg",
    link: "/products/4",
  },
];

const FeatureGrid = () => {
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasRevealed && window.scrollY > window.innerHeight / 2) {
        setHasRevealed(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasRevealed]);

  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      {gridItems.map((item, index) => (
        <Link
          to={item.link}
          key={item.id}
          className={`relative w-full h-[50vh] md:h-[50vh] overflow-hidden group`}
        >
          <img
            src={item.image}
            alt={`Feature ${index + 1}`}
            className={`w-full h-full object-cover grid-image ${
              hasRevealed ? "revealed" : ""
            }`}
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </Link>
      ))}
    </section>
  );
};

export default FeatureGrid;
