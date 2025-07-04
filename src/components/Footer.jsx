import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

const Footer = () => {
  const { language, isRTL } = useLanguage();

  const navigation = [
    { name: getTranslation(language, 'nav.home'), href: '/' },
    { name: getTranslation(language, 'nav.about'), href: '/about' },
    { name: getTranslation(language, 'nav.howItWorks'), href: '/how-it-works' },
    { name: getTranslation(language, 'nav.useCases'), href: '/use-cases' },
    { name: getTranslation(language, 'nav.gallery'), href: '/gallery' },
    { name: getTranslation(language, 'nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 mb-4`}>
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751591387661-%5Bcompress-image-cyborg%5D%C3%98%C2%A7%C3%99%C2%84%C3%99%C2%84%C3%99%C2%88%C3%98%C2%AC%C3%99%C2%88.png"
                alt="Crownycup Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">Crownycup</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {getTranslation(language, 'footer.description')}
            </p>
            <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <a
                href="https://www.instagram.com/crownycup/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <SafeIcon icon={FiInstagram} className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/crownycup.egypt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <SafeIcon icon={FiFacebook} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{getTranslation(language, 'footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{getTranslation(language, 'footer.contactInfo')}</h3>
            <div className="space-y-2">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                <SafeIcon icon={FiMapPin} className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">{getTranslation(language, 'footer.location')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                <SafeIcon icon={FiMail} className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">sales@crownycup.com</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                <SafeIcon icon={FiPhone} className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+20 10 91980025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">{getTranslation(language, 'footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;