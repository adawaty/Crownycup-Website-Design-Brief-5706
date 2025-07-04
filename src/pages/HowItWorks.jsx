import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiPackage, FiCoffee, FiSmile, FiRefreshCw } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

const HowItWorks = () => {
  const { language } = useLanguage();

  const steps = [
    {
      icon: FiPackage,
      title: 'Fill the Top',
      description: 'Add your favorite snacks to the spacious food compartment on top. Perfect for popcorn, nuts, chips, or any finger food.',
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590603069-64b2b3c3-7cfb-40b7-973b-c0fb7b8c4d29.jpg'
    },
    {
      icon: FiCoffee,
      title: 'Pour Your Drink',
      description: 'Fill the bottom compartment with your favorite beverage. The secure design prevents spills and keeps your drink fresh.',
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590610247-19c9e199-802f-4400-9278-63d7b70976d3.jpg'
    },
    {
      icon: FiSmile,
      title: 'Enjoy Together',
      description: 'Hold comfortably with one hand while enjoying both your snack and drink. No more juggling multiple containers!',
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590603069-64b2b3c3-7cfb-40b7-973b-c0fb7b8c4d29.jpg'
    },
    {
      icon: FiRefreshCw,
      title: 'Clean & Reuse',
      description: 'Easy to clean and reuse. Made from durable, food-safe materials that are built to last.',
      image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751590610247-19c9e199-802f-4400-9278-63d7b70976d3.jpg'
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
              How Crownycup
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                {' '}Works
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover the simple yet innovative design that makes snacking and drinking effortless
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
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
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={step.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      Step {index + 1}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={step.image}
                    alt={step.title}
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
              Ready to Try Crownycup?
            </h2>
            <p className="text-xl text-white mb-8">
              Experience the convenience of our innovative 2-in-1 design
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderNow}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;