import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

 
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
    className={`sticky top-0 z-50 h-16 md:h-20 border-b transition-colors duration-200
    ${scrolled
      ? 'bg-white border-gray-200 shadow-sm' 
      : 'bg-white border-transparent' 
    }`}
>
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/Company.1.png" alt="Omnicore Logo" className="w-8 h-8 rounded-lg object-contain" />
          <span className="text-xl font-bold text-gray-900">Omnicore Inc</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium relative group transition-colors ${
                location.pathname === item.path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300
                ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </Link>
          ))}
          <Link to="/get-started" className="btn-primary">Get Started</Link>
        </nav>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 md:top-20 bg-white border-b border-gray-200 shadow-sm"
          >
            <div className="py-4 space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pb-2">
                <Link to="/get-started" className="btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
