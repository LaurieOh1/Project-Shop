import React from 'react'
import { Link } from 'react-router-dom';
import leftImg from '../assets/20250610_1037_Elegant Portrait Silhouette_remix_01jxcfpjqwemxvznh38j7j0amg.png'; // Replace with your image path

function JoinExperience() {
  return (
    <section className="relative h-screen bg-cover bg-center mb-16" style={{ backgroundImage: `url(${leftImg})` }}>
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
  )
}

export default JoinExperience
