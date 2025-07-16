import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import leftImg from "../assets/20250610_1037_Elegant Portrait Silhouette_remix_01jxcfpjqwemxvznh38j7j0amg.png";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch sample products from your API
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data.slice(0, 4)); // show only first 4 on homepage
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[50vh] md:h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${leftImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center px-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to Amur
            </h1>
            <p className="text-xl md:text-2xl">
              Afro hair care crafted for you.
            </p>

            <Link
              to="/products"
              className="inline-block mt-4 px-6 py-3 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-200 transition duration-300"
            >
              Join the Experience
            </Link>
          </div>
        </div>
      </div>

      {/* Products Preview Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 font-medium mb-2">€{product.price}</p>
                <Link
                  to={`/products/${product._id}`}
                  className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  View
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/products"
              className="text-black font-semibold underline hover:text-gray-700"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
