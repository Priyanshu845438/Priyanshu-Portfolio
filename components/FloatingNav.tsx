
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { MenuIcon, XIcon } from './Icons'; // Assuming Icons.tsx for menu/close icons

interface FloatingNavProps {
  navItems: NavItem[];
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navItems[0]?.id || '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);

      let currentSection = '';
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust offset as needed, e.g., to account for nav height
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = item.id;
          }
        }
      });
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < window.innerHeight / 2) { // Default to first item if at top
        setActiveSection(navItems[0]?.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isVisible ? 'translate-y-0 opacity-100 py-3 bg-slate-800/80 backdrop-blur-md shadow-xl' : '-translate-y-full opacity-0 py-0'}`}
    >
      {/* Removed container mx-auto from this div, using parent's padding via px-4 etc. */}
      <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
          P. Raj
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2">
          {navItems.map((item: NavItem) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={() => {setActiveSection(item.id); setIsMobileMenuOpen(false);}}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                          ${activeSection === item.id ? 'bg-sky-500 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item: NavItem) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={() => {setActiveSection(item.id); setIsMobileMenuOpen(false);}}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                            ${activeSection === item.id ? 'bg-sky-500 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
