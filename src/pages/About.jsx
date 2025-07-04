import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiHeart, FiTarget, FiUsers, FiAward } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

const About = () => {
  const { language, isRTL } = useLanguage();

  const values = [
    {
      icon: FiHeart,
      title: getTranslation(language, 'about.values.passion.title'),
      description: getTranslation(language, 'about.values.passion.desc')
    },
    {
      icon: FiTarget,
      title: getTranslation(language, 'about.values.quality.title'),
      description: getTranslation(language, 'about.values.quality.desc')
    },
    {
      icon: FiUsers,
      title: getTranslation(language, 'about.values.customer.title'),
      description: getTranslation(language, 'about.values.customer.desc')
    },
    {
      icon: FiAward,
      title: getTranslation(language, 'about.values.pride.title'),
      description: getTranslation(language, 'about.values.pride.desc')
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
              {getTranslation(language, 'about.title')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                {' '}{getTranslation(language, 'about.highlight')}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {getTranslation(language, 'about.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {getTranslation(language, 'about.storyTitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {getTranslation(language, 'about.storyP1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {getTranslation(language, 'about.storyP2')}
              </p>
              <p className="text-lg text-gray-600">
                {getTranslation(language, 'about.storyP3')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751591387661-%5Bcompress-image-cyborg%5D%C3%98%C2%A7%C3%99%C2%84%C3%99%C2%84%C3%99%C2%88%C3%98%C2%AC%C3%99%C2%88.png"
                alt="Crownycup Logo"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(language, 'about.valuesTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {getTranslation(language, 'about.valuesDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white hover:bg-orange-50 transition-colors shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
              {getTranslation(language, 'about.ctaTitle')}
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {getTranslation(language, 'about.ctaDesc')}
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

export default About;