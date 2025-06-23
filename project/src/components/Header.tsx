import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  activeLink: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled, activeLink }) => {
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

  return (
    <Link
      to={href.replace('#', '')}
      smooth={true}
      duration={500}
      className={`cursor-pointer transition-all duration-300 ${getLinkClasses(href)}`}
    >
      {children}
    </Link>
  );
};

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const headerClasses = isScrolled
    ? 'py-4 bg-white shadow-md'
    : 'py-6 bg-transparent';
  
  const logoClasses = isScrolled
    ? 'text-blue-900'
    : 'text-white';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          <Link to="accueil" smooth={true} duration={500} className="cursor-pointer" onClick={closeMobileMenu}>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              WELLBE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} isScrolled={isScrolled} activeLink={activeLink}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-md transition-colors z-50 ${
              isScrolled && !isMobileMenuOpen ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="fixed inset-0 z-40 bg-blue-900/95 backdrop-blur-sm md:hidden"
            >
              <motion.div 
                className="flex flex-col items-center justify-center h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <nav className="flex flex-col items-center space-y-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Link
                        to={link.href.replace('#', '')}
                        smooth={true}
                        duration={500}
                        onClick={closeMobileMenu}
                        className={`text-3xl font-semibold transition-colors ${
                          activeLink === link.href
                            ? 'text-white'
                            : 'text-blue-200 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;