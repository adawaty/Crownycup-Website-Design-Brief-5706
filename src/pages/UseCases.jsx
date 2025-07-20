import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiFilm, FiMusic, FiSun } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

const UseCases = () => {
  const { language, isRTL } = useLanguage();
  
  const useCases = [
    {
      icon: FiFilm,
      title: getTranslation(language, 'useCases.cases.0.title'),
      description: getTranslation(language, 'useCases.cases.0.desc'),
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590603069-64b2b3c3-7cfb-40b7-973b-c0fb7b8c4d29.jpg'
    },
    {
      icon: FiMusic,
      title: getTranslation(language, 'useCases.cases.1.title'),
      description: getTranslation(language, 'useCases.cases.1.desc'),
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590610247-19c9e199-802f-4400-9278-63d7b70976d3.jpg'
    },
    {
      icon: FiSun,
      title: getTranslation(language, 'useCases.cases.2.title'),
      description: getTranslation(language, 'useCases.cases.2.desc'),
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590603069-64b2b3c3-7cfb-40b7-973b-c0fb7b8c4d29.jpg'
    }
  ];

  const handleOrderNow = () => {
    const message = language === 'ar' 
      ? 'مرحباً، أود طلب Crownycup. يمكنكم إرسال تفاصيل الطلب من فضلكم؟'
      : 'Hello, I would like to order Crownycup. Can you please send me the order details?';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201091980025?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              {getTranslation(language, 'useCases.title')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                {' '}{getTranslation(language, 'useCases.highlight')}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {getTranslation(language, 'useCases.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
                      <SafeIcon icon={useCase.icon} className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{useCase.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600">{useCase.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {getTranslation(language, 'useCases.ctaTitle')}
            </h2>
            <p className="text-xl text-white mb-8">
              {getTranslation(language, 'useCases.ctaDesc')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderNow}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
            >
              {getTranslation(language, 'nav.orderNow')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;