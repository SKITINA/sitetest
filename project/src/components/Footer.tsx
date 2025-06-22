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
        className="max-w-7xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="py-20 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* About */}
          <motion.div 
            className="md:w-1/3"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-4 tracking-wider">WELLBE</h3>
            <p className="text-blue-200 leading-relaxed">
              La première plateforme beauté au Maroc qui connecte les clients aux meilleurs professionnels de beauté.
            </p>
            <div className="flex space-x-5 mt-6">
              <motion.a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-2xl font-semibold mb-6">Prêt à transformer la beauté au Maroc ?</h4>
            <div className="space-y-4">
              <motion.a 
                href="#" 
                className="block border border-blue-200 text-blue-200 hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors text-center w-full md:w-80 btn-animate hover-lift"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Rejoindre comme Client
              </motion.a>
              <motion.a 
                href="#" 
                className="block border border-blue-200 text-blue-200 hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors text-center w-full md:w-80 btn-animate hover-lift"
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
          className="border-t border-blue-800 py-6 text-center text-sm text-blue-300"
          variants={itemVariants}
        >
          &copy; {new Date().getFullYear()} WELLBE. Tous droits réservés.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 