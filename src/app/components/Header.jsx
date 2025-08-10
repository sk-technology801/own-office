"use client"
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white w-full py-4 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              CodeZap
            </span>
          </Link>
        </div>

        {/* Desktop Navlinks */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-base font-medium text-white transition-transform duration-300 ease-out hover:translate-y-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Get Started Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            href="/get-started"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 focus-outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white transition-transform duration-300 ease-out hover:translate-y-1"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Inline CSS for additional styling */}
      <style jsx>{`
        .hover\\:translate-y-1:hover {
          transform: translateY(4px);
        }
      `}</style>
    </header>
  );
};

export default Header;