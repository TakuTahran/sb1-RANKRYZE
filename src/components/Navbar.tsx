import React from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              RANK RYZE
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.services')}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.contact')}
            </a>
            <LanguageSwitcher />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {t('nav.getStarted')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Pricing
            </a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Portfolio
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;