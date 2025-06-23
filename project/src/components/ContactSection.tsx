import React, { useState } from 'react';
import { User, Mail, Phone, Building, MessageSquare, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message envoyé avec succès !');
    }, 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const InputField = ({ id, label, type, placeholder, icon, required = false, className = '' }: any) => (
    <motion.div className={`space-y-2 ${className}`} variants={itemVariants}>
      <label htmlFor={id} className="text-sm font-medium text-gray-600 flex items-center">
        {icon} {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-gray-50 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        placeholder={placeholder}
      />
    </motion.div>
  );

  const TextAreaField = ({ id, label, placeholder, icon, required = false, rows = 5 }: any) => (
    <motion.div className="space-y-2" variants={itemVariants}>
      <label htmlFor={id} className="text-sm font-medium text-gray-600 flex items-center">
        {icon} {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        className="appearance-none rounded-lg relative block w-full px-4 py-3 bg-gray-50 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        placeholder={placeholder}
      />
    </motion.div>
  );

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Contactez-nous
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 px-4"
            variants={itemVariants}
          >
            Une question ? Une suggestion ? Nous sommes à votre écoute.
          </motion.p>
        </div>
        
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
          variants={formVariants}
        >
          <div className="bg-blue-900 px-4 sm:px-6 md:px-8 py-8 sm:py-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Envoyez-nous un message</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-blue-200 px-4">Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>
          </div>

          <form className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <InputField id="name" label="Nom complet" type="text" placeholder="Votre nom complet" icon={<User className="w-4 h-4 mr-2 text-gray-400" />} required />
                <InputField id="email" label="Email" type="email" placeholder="votre@email.com" icon={<Mail className="w-4 h-4 mr-2 text-gray-400" />} required />
                <InputField id="phone" label="Téléphone" type="tel" placeholder="+212 6XX XXX XXX" icon={<Phone className="w-4 h-4 mr-2 text-gray-400" />} />
                <InputField id="company" label="Entreprise/Salon" type="text" placeholder="Nom de votre entreprise" icon={<Building className="w-4 h-4 mr-2 text-gray-400" />} />
                <InputField id="subject" label="Sujet" type="text" placeholder="Sujet de votre message" icon={<MessageSquare className="w-4 h-4 mr-2 text-gray-400" />} required className="md:col-span-2" />
                <div className="md:col-span-2">
                    <TextAreaField id="message" label="Message" placeholder="Décrivez votre demande en détail..." icon={<MessageSquare className="w-4 h-4 mr-2 text-gray-400" />} required />
                </div>
            </div>
            <div className="text-center pt-4 sm:pt-6 md:pt-8">
              <AnimatedButton
                type="submit"
                size="lg"
                loading={isSubmitting}
                disabled={isSubmitting}
                icon={<Send size={18} />}
                onClick={() => alert('Message envoyé !')}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </AnimatedButton>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 