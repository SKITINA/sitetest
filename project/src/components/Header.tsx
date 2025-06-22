import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#professionnels', label: 'Professionnels' },
  { href: '#clients', label: 'Clients' },
  { href: '#pourquoi-nous-rejoindre', label: 'Pourquoi nous rejoindre?' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#accueil');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      let current = '';
      document.querySelectorAll('section[id]').forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollPosition >= sectionTop - 150) {
          current = `#${section.id}`;
        }
      });
      setActiveLink(current || '#accueil');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = isScrolled
    ? 'py-4 bg-white shadow-md'
    : 'py-6 bg-transparent';
  
  const logoClasses = isScrolled
    ? 'text-blue-900'
    : 'text-white';

  const getLinkClasses = (href: string) => {
    const isActive = activeLink === href;
    if (isScrolled) {
      return isActive
        ? 'text-blue-600 border-b-2 border-blue-500'
        : 'text-gray-600 hover:text-blue-600 border-b-2 border-transparent';
    }
    return isActive
      ? 'text-white border-b-2 border-blue-300'
      : 'text-gray-200 hover:text-white border-b-2 border-transparent';
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <Link to="accueil" smooth={true} duration={500} className="cursor-pointer">
            <h1 className={`text-4xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              WELLBE
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} isScrolled={isScrolled}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* ... (mobile menu button) */}
        </div>
      </div>
      
      {/* ... (mobile menu) */}
    </motion.header>
  );
};

export default Header;