import React, { useState } from 'react';
import { Mail, MessageCircle, GitBranch as BrandsTelegram, Handshake as BrandsWhatsapp } from 'lucide-react';
import LiveChat from './LiveChat';
import { useLanguage } from '../contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const { t } = useLanguage();

  const handleContact = (method: string) => {
    switch (method) {
      case 'whatsapp':
        window.open('https://wa.me/33751215998', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:contact@techstore.com';
        break;
      case 'telegram':
        window.open('http://t.me/holawork1', '_blank');
        break;
      case 'chat':
        setIsLiveChatOpen(true);
        break;
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="w-full h-48 flex items-center justify-center bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-2xl font-bold text-indigo-600 mb-4">{product.price}</p>
          
          <a 
            href="#" 
            className="block text-center text-indigo-600 hover:underline mb-4"
          >
            See the product
          </a>
          
          <button
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors mb-4"
            onClick={() => handleContact('whatsapp')}
          >
            {t('contactSeller')}
          </button>
          
          <div className="flex justify-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-600 mb-1">WhatsApp</span>
              <button
                onClick={() => handleContact('whatsapp')}
                className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                title="Contact via WhatsApp"
              >
                <BrandsWhatsapp className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-600 mb-1">Email</span>
              <button
                onClick={() => handleContact('email')}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title="Contact via Email"
              >
                <Mail className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-600 mb-1">Telegram</span>
              <button
                onClick={() => handleContact('telegram')}
                className="p-2 text-sky-600 hover:bg-sky-50 rounded-full transition-colors"
                title="Contact via Telegram"
              >
                <BrandsTelegram className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-600 mb-1">Live Chat</span>
              <button
                onClick={() => handleContact('chat')}
                className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                title="Start Live Chat"
              >
                <MessageCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <LiveChat 
        isOpen={isLiveChatOpen}
        onClose={() => setIsLiveChatOpen(false)}
      />
    </>
  );
}

export default ProductCard;
