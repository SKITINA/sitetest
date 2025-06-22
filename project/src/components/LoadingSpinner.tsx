import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cercle principal */}
        <motion.div
          className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Cercles orbitaux */}
        <motion.div
          className="absolute top-0 left-1/2 w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full -translate-x-1/2"
          animate={{ 
            rotate: -360,
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-0 w-2 h-2 bg-blue-500 rounded-full -translate-y-1/2"
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 2.5, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-0 w-2 h-2 bg-blue-300 rounded-full -translate-y-1/2"
          animate={{ 
            rotate: -360,
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            rotate: { duration: 1.8, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </motion.div>
      
      {/* Texte de chargement */}
      <motion.div
        className="absolute bottom-1/4 text-blue-600 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Chargement...
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 