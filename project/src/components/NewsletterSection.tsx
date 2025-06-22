import React from 'react';
import { Clock, CheckCircle, Gift } from 'lucide-react';

const NewsletterSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Un moment pour soi de qualité",
      description: "Trouvez les meilleurs établissements de beauté proches de chez vous en quelques secondes grâce à des avis 100% certifiés."
    },
    {
      icon: CheckCircle,
      title: "Réservation instantanée",
      description: "Prenez rendez-vous à tout moment, même en dehors des heures d'ouverture habituelles."
    },
    {
      icon: Gift,
      title: "Bénéficiez d'offres exclusives",
      description: "Accédez à des promotions et réductions disponibles uniquement via notre plateforme."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8 inline-block">
            UNE NOUVELLE EXPÉRIENCE BEAUTÉ
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Rejoignez-nous en avant-première pour ne rien rater de nos actualités
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold transition-colors text-lg">
            Je rejoins en avant-première
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;