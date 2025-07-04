import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, isRTL } = useLanguage();

  const navigation = [
    { name: getTranslation(language, 'nav.home'), href: '/' },
    { name: getTranslation(language, 'nav.about'), href: '/about' },
    { name: getTranslation(language, 'nav.howItWorks'), href: '/how-it-works' },
    { name: getTranslation(language, 'nav.useCases'), href: '/use-cases' },
    { name: getTranslation(language, 'nav.gallery'), href: '/gallery' },
    { name: getTranslation(language, 'nav.contact'), href: '/contact' },
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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751591387661-%5Bcompress-image-cyborg%5D%C3%98%C2%A7%C3%99%C2%84%C3%99%C2%84%C3%99%C2%88%C3%98%C2%AC%C3%99%C2%88.png"
                alt="Crownycup Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-gray-800">Crownycup</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-8`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderNow}
              className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              {getTranslation(language, 'nav.orderNow')}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={handleOrderNow}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2 rounded-full font-medium"
            >
              {getTranslation(language, 'nav.orderNow')}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;