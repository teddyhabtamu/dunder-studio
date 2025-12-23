
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InstagramIcon } from '../constants';

const Header: React.FC = () => {
  const location = useLocation();
  const isDark = location.pathname === '/'; // Slideshow might need white text if images are dark, but here we stick to black per Figma

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-8 flex justify-between items-start pointer-events-none">
      <div className="pointer-events-auto">
        <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity">
          dunder
        </Link>
      </div>
      
      <nav className="flex items-center space-x-6 md:space-x-10 pointer-events-auto uppercase text-xs md:text-sm font-semibold tracking-widest text-black">
        <Link 
          to="/about" 
          className={`relative group transition-colors hover:text-gray-500 ${location.pathname === '/about' ? 'text-black' : ''}`}
        >
          About
          <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${location.pathname === '/about' ? 'scale-x-100' : ''}`}></span>
        </Link>
        <Link 
          to="/contact" 
          className={`relative group transition-colors hover:text-gray-500 ${location.pathname === '/contact' ? 'text-black' : ''}`}
        >
          Contact
          <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${location.pathname === '/contact' ? 'scale-x-100' : ''}`}></span>
        </Link>
        <a 
          href="https://www.instagram.com/dunder.studios/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:opacity-60 transition-opacity"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </nav>
    </header>
  );
};

export default Header;
