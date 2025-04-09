import { useState } from 'react';
import { Phone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <header className="relative bg-white/90 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Logo ajouté ici */}
              <img
                src="https://i.imgur.com/QwUuHIn.png"
                alt="Realnotes Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                {t('')}
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {t('products')}
            </Link>
            <Link to="/documents" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {t('documents')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {t('Product to clean')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
              {t('contact')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Globe className="h-5 w-5 mr-1" />
                <span className="hidden md:inline">{currentLanguage}</span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {['English', 'Français', 'Español', 'Deutsch', '中文'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLanguageMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="flex items-center text-indigo-600 hover:text-indigo-700">
              <Phone className="h-5 w-5 mr-1" />
              <span className="hidden md:inline">{t('contact')}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
