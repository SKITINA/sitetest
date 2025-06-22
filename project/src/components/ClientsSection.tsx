import React, { useId } from 'react';
import { motion, useAnimate, Variants } from 'framer-motion';

const ClientsSection = () => {
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
    <section id="clients" className="py-24 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <motion.div 
            className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 inline-block animate-pulse-slow"
            variants={itemVariants}
          >
            POUR LES CLIENTS
          </motion.div>
          
          <motion.h2 
            className="text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            La beauté à portée de main
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Trouvez et réservez instantanément vos prestations beauté préférées, 24h/24 et 7j/7. Accédez aux meilleurs professionnels du Maroc sans attente et profitez de promotions exclusives sur vos prestations.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={imageVariants}
          className="relative"
        >
          <motion.img 
            src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Femme souriante" 
            className="rounded-2xl shadow-2xl w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientsSection;