import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-tight">Mica Nail Beauty</span>
              <span className="text-xs text-rose-600 leading-tight">Where Beauty Meets Artistry</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(link.path) ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-rose-600 transform origin-left transition-transform duration-200 ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:7164074105" className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(716) 407-4105</span>
            </a>
            <a href="https://www.instagram.com/mica.nailbeauty" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
            <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200 space-y-3">
              <a href="tel:7164074105" className="flex items-center space-x-2 py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(716) 407-4105</span>
              </a>
              <a href="https://www.instagram.com/mica.nailbeauty" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-medium">Follow Us</span>
              </a>
              <Button asChild className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;