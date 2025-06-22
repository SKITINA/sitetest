import React, { ReactNode, useId } from 'react';
import { motion, useAnimate, Variants } from 'framer-motion';

interface InfoCardProps {
    title: string;
    children: ReactNode;
    delay?: number;
  }
  
  const InfoCard: React.FC<InfoCardProps> = ({ title, children, delay = 0 }) => (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover-lift"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <h4 className="font-bold text-lg text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{children}</p>
    </motion.div>
  );

const WhyJoinSection = () => {
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
    <section id="pourquoi-nous-rejoindre" className="py-24 bg-white">
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
          Pourquoi nous rejoindre ?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          WELLBE est bien plus qu'une simple plateforme de réservation. C'est un écosystème complet qui valorise à la fois les professionnels et les clients.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-left"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Découvrez la révolution dans l'expérience beauté au Maroc bientôt disponible.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <InfoCard 
                title="Réservation Instantanée"
                delay={0.1}
              >
                Plus d'attente au téléphone ! Réservez en 30 secondes chrono, confirmez instantanément et recevez vos rappels automatiques.
              </InfoCard>
              
              <InfoCard 
                title="Confiance & Sécurité"
                delay={0.2}
              >
                Profils vérifiés, paiements sécurisés et système d'évaluation transparent pour une expérience en toute sérénité côté clients et professionnels.
              </InfoCard>
              
              <InfoCard 
                title="Visibilité & Personnalisation"
                delay={0.3}
              >
                Augmentez votre clientèle grâce à notre plateforme et bénéficiez de recommandations personnalisées basées sur vos préférences et besoins.
              </InfoCard>
              
              <InfoCard 
                title="Qualité garantie"
                delay={0.4}
              >
                Rejoignez un réseau premium de professionnels qualifiés et découvrez les meilleurs services beauté de votre région.
              </InfoCard>
            </div>
          </motion.div>
          
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
              src="https://images.pexels.com/photos/713312/pexels-photo-713312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Femmes souriantes" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              whileHover={{ 
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyJoinSection; 