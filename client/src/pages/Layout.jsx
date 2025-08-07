import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Layout.css'; // Assuming you have some global styles

function Layout() {
  return (
    <>
      <nav className="bg-black text-white py-4 px-6">
        <ul className="flex space-x-12 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-400 transition">
              Blog
            </Link>
          </li>
           <li>
            <Link to="/shop" className="hover:text-gray-400 transition">Shop</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
