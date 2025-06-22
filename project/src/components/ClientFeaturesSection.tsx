import React, { ReactNode, useId } from 'react';
import { Clock, CalendarCheck, Gift } from 'lucide-react';
import { motion, useAnimate } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children, delay }) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const filterId = useId();

  const onHoverStart = () => {
    animate("feDisplacementMap", { scale: 20 }, { duration: 0.3, ease: 'circOut' });
  };
  const onHoverEnd = () => {
    animate("feDisplacementMap", { scale: 0 }, { duration: 0.3, ease: 'circOut' });
  };

  return (
    <div ref={scope} className="h-full">
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={filterId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed={delay * 10} result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="0" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>
      <motion.div
        className="bg-blue-900 p-8 rounded-2xl shadow-xl text-white h-full relative overflow-hidden"
        style={{ filter: `url(#${filterId})` }}
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
    </div>
  );
};

const ClientFeaturesSection = () => {
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

  return (
    <section className="py-24 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-6xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          Votre prochaine prestation beauté à portée de clic
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Découvrez une nouvelle façon de prendre soin de vous, plus simple, plus rapide et plus accessible.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Clock size={40} />} 
            title="Un moment pour soi de qualité" 
            delay={0.2}
          >
            Trouvez les meilleurs établissements de beauté proches de chez vous en quelques secondes grâce à des avis 100% certifiés.
          </FeatureCard>
          
          <FeatureCard 
            icon={<CalendarCheck size={40} />} 
            title="Réservation instantanée" 
            delay={0.4}
          >
            Prenez rendez-vous à tout moment, même en dehors des heures d'ouverture habituelles.
          </FeatureCard>
          
          <FeatureCard 
            icon={<Gift size={40} />} 
            title="Bénéficiez d'offres exclusives" 
            delay={0.6}
          >
            Accédez à des promotions et réductions disponibles uniquement via notre plateforme.
          </FeatureCard>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientFeaturesSection; 