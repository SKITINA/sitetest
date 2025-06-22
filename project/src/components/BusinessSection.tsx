import React from 'react';
import { TrendingUp, Eye, Calendar } from 'lucide-react';

const BusinessSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Boostez votre chiffre d'affaires",
      description: "Gagnez de nouveaux clients tous les mois et augmentez rapidement votre chiffre d'affaires."
    },
    {
      icon: Eye,
      title: "Soyez encore plus visible",
      description: "Profitez d'une page dédiée à votre établissement et d'un accompagnement dans votre communication."
    },
    {
      icon: Calendar,
      title: "Évitez les no shows",
      description: "Réduisez drastiquement les absences aux rendez-vous grâce à notre système de rappel automatique et d'accompte."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Transformez et faites décoller votre business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Boostez votre chiffre d'affaires, soyez encore plus visible, évitez les no shows.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 h-full text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="relative z-10">
                  <feature.icon className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;