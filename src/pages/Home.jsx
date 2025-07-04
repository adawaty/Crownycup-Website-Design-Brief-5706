import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiArrowRight, FiStar, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

const Home = () => {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      icon: FiStar,
      title: getTranslation(language, 'home.features.design.title'),
      description: getTranslation(language, 'home.features.design.desc')
    },
    {
      icon: FiUsers,
      title: getTranslation(language, 'home.features.events.title'),
      description: getTranslation(language, 'home.features.events.desc')
    },
    {
      icon: FiAward,
      title: getTranslation(language, 'home.features.quality.title'),
      description: getTranslation(language, 'home.features.quality.desc')
    },
    {
      icon: FiTrendingUp,
      title: getTranslation(language, 'home.features.innovation.title'),
      description: getTranslation(language, 'home.features.innovation.desc')
    }
  ];

  const testimonials = getTranslation(language, 'home.testimonials');

  const handleOrderNow = () => {
    const message = language === 'ar' 
      ? 'مرحباً، أود طلب Crownycup. يمكنكم إرسال تفاصيل الطلب من فضلكم؟'
      : 'Hello, I would like to order Crownycup. Can you please send me the order details?';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201091980025?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {getTranslation(language, 'home.heroTitle')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                  {' '}{getTranslation(language, 'home.heroHighlight')}{' '}
                </span>
                {getTranslation(language, 'home.heroSubtitle')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {getTranslation(language, 'home.heroDescription')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOrderNow}
                  className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
                >
                  {getTranslation(language, 'nav.orderNow')}
                </motion.button>
                <Link
                  to="/how-it-works"
                  className={`border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {getTranslation(language, 'home.learnMore')}
                  <SafeIcon icon={FiArrowRight} className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative animate-float">
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590603069-64b2b3c3-7cfb-40b7-973b-c0fb7b8c4d29.jpg"
                  alt="Crownycup Product"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className={`absolute -top-4 ${isRTL ? '-left-4' : '-right-4'} bg-orange-500 text-white px-4 py-2 rounded-full font-semibold`}>
                  {getTranslation(language, 'home.madeInEgypt')}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(language, 'home.whyChoose')}
            </h2>
            <p className="text-xl text-gray-600">
              {getTranslation(language, 'home.whyChooseDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590610247-19c9e199-802f-4400-9278-63d7b70976d3.jpg"
                alt="Crownycup in Action"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {getTranslation(language, 'home.experienceTitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {getTranslation(language, 'home.experienceDesc')}
              </p>
              <ul className="space-y-4 mb-8">
                {getTranslation(language, 'home.benefits').map((benefit, index) => (
                  <li key={index} className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/gallery"
                className={`inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {getTranslation(language, 'home.viewMorePhotos')}
                <SafeIcon icon={FiArrowRight} className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(language, 'home.testimonialTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {getTranslation(language, 'home.testimonialDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className={`flex mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {getTranslation(language, 'home.ctaTitle')}
          </h2>
          <p className="text-xl text-white mb-8">
            {getTranslation(language, 'home.ctaDesc')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderNow}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
            >
              {getTranslation(language, 'nav.orderNow')}
            </motion.button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              {getTranslation(language, 'home.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;