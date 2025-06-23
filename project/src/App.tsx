import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfessionalsSection from './components/ProfessionalsSection';
import FeaturesSection from './components/FeaturesSection';
import ClientsSection from './components/ClientsSection';
import ClientFeaturesSection from './components/ClientFeaturesSection';
import WhyJoinSection from './components/WhyJoinSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';
import ContactSection from './components/ContactSection';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import Chatbot from './components/Chatbot';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="bg-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
        <motion.div
            key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ParticleBackground />
          <Header />
          <main>
            <Hero />
            <ProfessionalsSection />
            <FeaturesSection />
            <ClientsSection />
            <ClientFeaturesSection />
            <WhyJoinSection />
              <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
          <Chatbot />
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;