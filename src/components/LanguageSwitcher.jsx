import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import { FiGlobe } from 'react-icons/fi';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage(language === 'en' ? 'ar' : 'en')}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-orange-50 hover:text-orange-600 transition-colors focus-ring"
      >
        <SafeIcon icon={FiGlobe} className="h-4 w-4" />
        <span className="text-sm font-medium">
          {language === 'en' ? 'العربية' : 'English'}
        </span>
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;