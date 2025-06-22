import React from 'react';
import { motion, Variants } from 'framer-motion';

const Preloader = () => {
  const text = "WELLBE";

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-blue-900 flex items-center justify-center z-[100]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
    >
      <motion.div
        className="flex overflow-hidden"
        aria-label={text}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="text-white font-bold text-6xl md:text-8xl"
            variants={letterVariants}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Preloader; 