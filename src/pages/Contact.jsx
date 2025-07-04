import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

const Contact = () => {
  const { language, isRTL } = useLanguage();

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
              {getTranslation(language, 'contact.title')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                {' '}{getTranslation(language, 'contact.highlight')}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {getTranslation(language, 'contact.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              {getTranslation(language, 'contact.infoTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMail} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {getTranslation(language, 'contact.info.email.title')}
                </h3>
                <p className="text-orange-600 font-medium mb-1">sales@crownycup.com</p>
                <p className="text-gray-600">{getTranslation(language, 'contact.info.email.desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiPhone} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {getTranslation(language, 'contact.info.phone.title')}
                </h3>
                <p className="text-orange-600 font-medium mb-1">+20 10 91980025</p>
                <p className="text-gray-600">{getTranslation(language, 'contact.info.phone.desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMapPin} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {getTranslation(language, 'contact.info.location.title')}
                </h3>
                <p className="text-orange-600 font-medium mb-1">{getTranslation(language, 'footer.location')}</p>
                <p className="text-gray-600">{getTranslation(language, 'contact.info.location.desc')}</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {getTranslation(language, 'contact.followUs')}
              </h3>
              <div className={`flex justify-center ${isRTL ? 'space-x-reverse' : ''} space-x-6`}>
                <motion.a
                  href="https://www.instagram.com/crownycup/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full border-2 border-pink-600 text-pink-600 flex items-center justify-center transition-colors hover:bg-pink-50"
                >
                  <SafeIcon icon={FiInstagram} className="h-8 w-8" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/crownycup.egypt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center transition-colors hover:bg-blue-50"
                >
                  <SafeIcon icon={FiFacebook} className="h-8 w-8" />
                </motion.a>
              </div>
            </div>
          </motion.div>
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
              {getTranslation(language, 'contact.ctaTitle')}
            </h2>
            <p className="text-xl text-white mb-8">
              {getTranslation(language, 'contact.ctaDesc')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderNow}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
            >
              {getTranslation(language, 'contact.placeOrder')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;