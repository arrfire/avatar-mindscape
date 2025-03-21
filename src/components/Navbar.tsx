
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Create Avatar', path: '/avatar-creation' },
    { name: 'Safe Space', path: '/safe-space' },
    { name: 'Rewards', path: '/rewards' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4',
        scrolled ? 'glass-effect' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={closeMobileMenu}
        >
          <div className="h-10 w-10 rounded-full bg-gradient-flow from-mind-300 to-mind-500 flex items-center justify-center shadow-soft">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="font-semibold text-xl tracking-tight">Mindscape</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                'transition-all duration-200 px-1 py-2 hover:text-mind-600 relative group',
                location.pathname === route.path ? 'text-mind-600' : 'text-foreground'
              )}
            >
              {route.name}
              <span 
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 bg-mind-500 transform origin-left transition-transform duration-200",
                  location.pathname === route.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                )}
              />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect mt-3 rounded-lg p-4 mx-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  'px-4 py-2 rounded-md transition-colors duration-200',
                  location.pathname === route.path 
                    ? 'bg-mind-50 text-mind-600' 
                    : 'hover:bg-mind-50 hover:text-mind-600'
                )}
                onClick={closeMobileMenu}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
