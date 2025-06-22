import React, { ReactNode } from 'react';
import { TrendingUp, Eye, CalendarX2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children, delay = 0 }) => {
  return (
    <motion.div
      className="bg-blue-900 p-8 rounded-2xl shadow-xl text-white h-full relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {/* Animated Wavy Background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-blue-800 opacity-50"
          style={{ borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%' }}
          animate={{
            x: ['0%', '20%', '0%'],
            y: ['0%', '10%', '0%'],
            rotate: [0, 5, 0],
            transition: { duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }}
        />
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-blue-700 opacity-40"
          style={{ borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%' }}
          animate={{
            x: ['-20%', '0%', '-20%'],
            y: ['-10%', '0%', '-10%'],
            rotate: [-5, 0, -5],
            transition: { duration: 25, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 2 }
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <motion.div 
          className="mb-6"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 flex-grow">{title}</h3>
        <p className="text-blue-200">{children}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
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
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 inline-block animate-pulse-slow"
          variants={itemVariants}
        >
          POUR LES PROFESSIONNELS
        </motion.div>
        
        <motion.h2 
          className="text-6xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          Tout ce dont vous avez besoin pour réussir
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Notre plateforme est conçue pour simplifier la gestion de votre activité, vous faire gagner du temps et vous aider à vous concentrer sur ce que vous faites de mieux : sublimer vos clients.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<TrendingUp size={40} />} 
            title="Boostez votre chiffre d'affaires"
            delay={0.2}
          >
            Gagnez de nouveaux clients tous les mois et augmentez rapidement votre chiffre d'affaires.
          </FeatureCard>
          
          <FeatureCard 
            icon={<Eye size={40} />} 
            title="Soyez encore plus visible"
            delay={0.4}
          >
            Profitez d'une page dédiée à votre établissement et d'un accompagnement dans votre communication.
          </FeatureCard>
          
          <FeatureCard 
            icon={<CalendarX2 size={40} />} 
            title="Évitez les no shows"
            delay={0.6}
          >
            Réduisez drastiquement les absences aux rendez-vous grâce à notre système de rappel automatique et d'acompte.
          </FeatureCard>
        </div>
        
        <motion.div 
          className="mt-20"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Une expérience privilégiée</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Inscrivez-vous pour un accès prioritaire et des avantages exclusifs dès le lancement.
          </p>
          <motion.button 
            className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg btn-animate hover-lift"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Je rejoins en avant-première
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection; 