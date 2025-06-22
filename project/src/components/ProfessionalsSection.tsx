import React, { useId } from 'react';
import { motion, useAnimate, Variants } from 'framer-motion';

const ProfessionalsSection = () => {
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const [scope, animate] = useAnimate<HTMLDivElement>();
  const filterId = useId();

  const onHoverStart = () => {
    animate("feDisplacementMap", { scale: 20 }, { duration: 0.3, ease: 'circOut' });
  };
  const onHoverEnd = () => {
    animate("feDisplacementMap", { scale: 0 }, { duration: 0.3, ease: 'circOut' });
  };

  return (
    <section id="professionnels" className="py-24 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          ref={scope}
          variants={imageVariants}
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <motion.img 
            src="https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Coiffeur coupant des cheveux" 
            className="rounded-2xl shadow-2xl w-full h-auto"
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <motion.div 
            className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 inline-block animate-pulse-slow"
            variants={itemVariants}
          >
            PROFESSIONNELS DE LA BEAUTÉ
          </motion.div>
          
          <motion.h2 
            className="text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Transformez chaque opportunité en réservation
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Notre plateforme vous connecte directement avec une clientèle qui recherche vos services à travers le Maroc. Augmentez votre visibilité, simplifiez votre gestion et boostez votre croissance.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfessionalsSection;