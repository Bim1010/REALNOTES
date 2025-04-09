import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  useLanguage();

  const currencies = [
    { id: 'eur', name: 'Euro Zone' },
    { id: 'cad', name: 'Canadian Dollar' },
    { id: 'aud', name: 'Australian Dollar' },
    { id: 'usd', name: 'US Dollar' },
    { id: 'gbp', name: 'British Pound' },
    { id: 'chf', name: 'Swiss Franc' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Important Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          {/* Product Menu */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Shop by Currency</h3>
            <ul className="space-y-2">
              {currencies.map(currency => (
                <li key={currency.id}>
                  <Link 
                    to={`/category/${currency.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {currency.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />contact@realnotes.shop
              </div>
              <div className="pt-4">
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Realnotes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;