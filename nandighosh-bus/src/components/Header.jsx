import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/images/nandighoshbus_logo.jpeg'; // Adjust the path as necessary

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Routes', href: '#routes' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    
    const sections = document.querySelectorAll('section');
    let foundActive = false;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY + 100; // Adjust this value as needed
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveLink(`#${section.id}`);
        foundActive = true;
      }
    });
    
    // If no section found in view and we're at top of page
    if (!foundActive && window.scrollY === 0) {
      setActiveLink('#home');
    }
  };

  // Set initial active link immediately
  setActiveLink('#home');
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const toggleMenu = () => setIsOpen(!isOpen);

const handleLinkClick = (href) => {
  setIsOpen(false);
  const element = document.querySelector(href);
  if (element) {
    // Wait for scroll to complete before updating activeLink
    element.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setActiveLink(href), 1000); // Match scroll duration
  }
};

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
           <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <a href="#home" className="flex items-center" onClick={() => handleLinkClick('#home')}>              
              <span className="ml-3 text-xl font-bold text-gray-800">
                Nandighosh Bus
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-2 py-1 text-lg font-medium ${
                    activeLink === link.href
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-400'
                  } transition-colors`}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-0.5 w-full bg-orange-500"
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 pb-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`block px-3 py-2 text-lg font-medium ${
                      activeLink === link.href
                        ? 'text-orange-500'
                        : 'text-gray-700 '
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;