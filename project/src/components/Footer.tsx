import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <footer id="contact" className="bg-blue-900 text-white relative">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12">
          {/* About */}
          <motion.div 
            className="w-full lg:w-1/3 text-center lg:text-left"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 tracking-wider">WELLBE</h3>
            <p className="text-blue-200 leading-relaxed text-sm sm:text-base">
              La première plateforme beauté au Maroc qui connecte les clients aux meilleurs professionnels de beauté.
            </p>
            <div className="flex justify-center lg:justify-start space-x-5 mt-4 sm:mt-6">
              <motion.a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="w-full lg:w-auto">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">Prêt à transformer la beauté au Maroc ?</h4>
            <div className="space-y-3 sm:space-y-4">
              <motion.a 
                href="#" 
                className="block border border-blue-200 text-blue-200 hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-center w-full lg:w-80 btn-animate hover-lift text-sm sm:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Rejoindre comme Client
              </motion.a>
              <motion.a 
                href="#" 
                className="block border border-blue-200 text-blue-200 hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-center w-full lg:w-80 btn-animate hover-lift text-sm sm:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Rejoindre comme Professionnel
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-blue-800 py-4 sm:py-6 text-center text-xs sm:text-sm text-blue-300"
          variants={itemVariants}
        >
          &copy; {new Date().getFullYear()} WELLBE. Tous droits réservés.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 