import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Particules plus grandes */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-4 h-4 bg-blue-300 rounded-full opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Particules brillantes */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`bright-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground; 