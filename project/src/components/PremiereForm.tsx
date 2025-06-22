import React, { useState } from 'react';
import { User, Mail, Phone, Building, MapPin, CheckCircle, Award, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiereForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(30, 58, 138, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simuler un envoi
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Formulaire envoyé avec succès !');
    }, 2000);
  };

  return (
    <motion.div 
      id="contact"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="max-w-3xl w-full space-y-8"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          variants={formVariants}
          whileHover={{ 
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="bg-blue-900 px-8 py-10 text-center"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-white">Rejoignez l'Avant-Première</h2>
            <p className="mt-4 text-lg text-blue-200">Complétez le formulaire ci-dessous pour obtenir un accès prioritaire</p>
          </motion.div>
          
          <form className="px-8 py-10 space-y-6" onSubmit={handleSubmit}>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {/* Nom complet */}
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700 flex items-center">
                  <User className="w-4 h-4 mr-2 text-gray-400" />
                  Nom complet
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-gray-50 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-200"
                  placeholder="Entrez votre nom complet"
                />
              </motion.div>

              {/* Email professionnel */}
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  Email professionnel
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-gray-50 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-200"
                  placeholder="Entrez votre email professionnel"
                />
              </motion.div>

              {/* Numéro de téléphone */}
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  Numéro de téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-gray-50 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-200"
                  placeholder="Entrez votre numéro de téléphone"
                />
              </motion.div>

              {/* Nom de l'établissement */}
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="establishmentName" className="text-sm font-medium text-gray-700 flex items-center">
                  <Building className="w-4 h-4 mr-2 text-gray-400" />
                  Nom de l'établissement
                </label>
                <input
                  id="establishmentName"
                  name="establishmentName"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-gray-50 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-200"
                  placeholder="Entrez le nom de votre établissement"
                />
              </motion.div>

              {/* Ville de l'établissement */}
              <motion.div 
                className="space-y-2 md:col-span-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="city" className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  Ville de l'établissement
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-gray-50 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-200"
                  placeholder="Entrez la ville de votre établissement"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Envoi en cours...
                  </motion.div>
                ) : (
                  "Je rejoins en avant-première"
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center space-x-6 text-sm text-gray-600"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            <span>Sécurisé</span>
          </motion.div>
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Award className="w-4 h-4 mr-2 text-blue-500" />
            <span>Gratuit</span>
          </motion.div>
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Lock className="w-4 h-4 mr-2 text-purple-500" />
            <span>Accès Prioritaire</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PremiereForm; 