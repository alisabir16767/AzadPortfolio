import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              VisaExpert Pro
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>+91 7464082141</span>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-blue-600">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-blue-600">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-blue-600">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="block text-gray-700 hover:text-blue-600">
              Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-blue-600">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600">
              Contact
            </button>
            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                <Phone size={16} />
                <span>+91 7464082141</span>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Free Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;