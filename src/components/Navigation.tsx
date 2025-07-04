import React, { useState, useEffect } from 'react';
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'experience',
    label: 'Experience'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'education',
    label: 'Education'
  }, {
    id: 'references',
    label: 'References'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold gradient-text">Hansani Bandara</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`nav-link ${activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                {item.label}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-gray-200/30 dark:border-white/10">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`nav-link text-left ${activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                  {item.label}
                </button>)}
            </div>
          </div>}
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="md:hidden mobile-swipe-indicator">
        Swipe to navigate
      </div>
    </nav>;
};
export default Navigation;