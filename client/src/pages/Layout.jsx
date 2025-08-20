import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Layout.css";
import { useCart } from "../Context/CartContext.jsx";
import Footer from "../components/Footer";

function Layout() {
  const [showSearch, setShowSearch] = useState(false);
  const { count } = useCart();

  const onSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-black text-white px-6 py-4">
        {/* Left Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-300">
              Shop
            </Link>
          </li>
        </ul>

        {/* Right: Search + Cart + Profile */}
        <div className="flex items-center space-x-4">
          {/* Search toggle + input */}
          <form
            onSubmit={onSearchSubmit}
            className="flex items-center space-x-2"
          >
            <button
              type="button"
              onClick={() => setShowSearch((v) => !v)}
              className="hover:text-gray-300"
              aria-label="Toggle search"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </button>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="w-40 p-1 rounded border border-gray-300 text-black text-sm focus:outline-none focus:border-gray-500"
              />
            )}
          </form>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:text-gray-300"
            aria-label="Cart"
          >
            <FontAwesomeIcon icon={faBagShopping} size="lg" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {count}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link
            to="/register"
            className="hover:text-gray-300"
            aria-label="Account"
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Link>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
