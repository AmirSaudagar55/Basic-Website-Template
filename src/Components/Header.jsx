// Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Fix the import

const Header = () => {
  return (
    <header className="p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-black font-bold text-xl">Your Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-green-600 font-bold">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-green font-bold">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-green font-bold">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-green font-bold">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
