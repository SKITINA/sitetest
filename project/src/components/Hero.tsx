import React, { useState } from 'react';
import { Headphones, Mail, Plus, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Hero = () => {
  const [isFabOpen, setIsFabOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const fabVariants: Variants = {
    closed: {
      scale: 1,
      rotate: 0
    },
    open: {
      scale: 1.1,
      rotate: 180
    }
  };

  const fabItemVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0,
      y: 20
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
        initial={{ scale: 1.1, y: 0 }}
        animate={{ scale: 1, y: [0, -15, 0] }}
        transition={{ 
          scale: { duration: 1.5, ease: "easeOut" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
        }}
      ></motion.div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.div 
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 inline-block animate-pulse-slow"
            variants={itemVariants}
          >
            LA PREMIÈRE PLATEFORME BEAUTÉ AU MAROC
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            variants={itemVariants}
          >
            La beauté simplifiée
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Réservez vos prestations beauté en quelques clics. À tout moment. Chez les meilleurs professionnels.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6" variants={itemVariants}>
            <a href="#professionnels" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-600 text-white font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Je suis un professionnel
              </button>
            </a>
            <a href="#clients" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105">
                Je suis un client
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* FAB avec animations améliorées */}
      <div className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 flex flex-col items-center gap-4">
        <AnimatePresence>
          {isFabOpen && (
            <motion.div 
              className="flex flex-col-reverse gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Plus Button */}
              <motion.button 
                className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover-lift"
                variants={fabItemVariants}
                initial="closed"
                animate="open"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={20} className="sm:w-6 sm:h-6" />
              </motion.button>
              
              {/* Email Button */}
              <motion.a 
                href="mailto:contact@wellbe.ma" 
                className="bg-red-500 hover:bg-red-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover-lift"
                variants={fabItemVariants}
                initial="closed"
                animate="open"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              
              {/* WhatsApp Button */}
              <motion.a 
                href="https://wa.me/212000000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover-lift"
                variants={fabItemVariants}
                initial="closed"
                animate="open"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div className="relative">
          <motion.div 
            className="absolute top-1 left-1 w-14 h-14 sm:w-16 sm:h-16 bg-green-600/50 rounded-full filter blur-sm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          
          <motion.button
            onClick={() => setIsFabOpen(!isFabOpen)}
            className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-xl"
            variants={fabVariants}
            animate={isFabOpen ? "open" : "closed"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isFabOpen ? "Fermer le menu de contact" : "Ouvrir le menu de contact"}
          >
            <AnimatePresence mode="wait">
              {isFabOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="sm:w-7 sm:h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Headphones size={24} className="sm:w-7 sm:h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;