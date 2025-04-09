import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<string, string>> = {
  English: {
    platformName: 'Realnotes',
    explore: 'How to Buy Counterfeit Money, ID Cards and Driving Licenses Online',
    contact: 'Contact Us',
    contactSeller: 'Contact Seller',
    products: 'Products',
    about: 'About',
    documents: 'Documents',
    drivingLicenses: 'Driving Licenses',
    idCards: 'ID Cards',
    featuredProducts: 'Featured Products',
    shopByCurrency: 'Shop by Currency',
    hello: 'Hello! How can I assist you today?',
    typeMessage: 'Type your message...',
    liveChat: 'Live Chat',
    agentTyping: 'Agent is typing...',
    thankYou: 'Thank you for your message! Click on our contact link to talk to customer service directly.',
    ourMission: 'Our Mission',
    missionText: 'At Realnotes, we\'re committed to providing a secure and efficient platform for international transactions.',
    getInTouch: 'Get in Touch',
    sendMessage: 'Send Message',
    followUs: 'Follow Us',
    newsletter: 'Newsletter',
    subscribe: 'Subscribe'
  },
  Français: {
    platformName: 'Realnotes',
    explore: 'Comment Acheter de l\'Argent, des Cartes d\'Identité et des Permis de Conduire en Ligne',
    contact: 'Contactez-nous',
    contactSeller: 'Contacter le Vendeur',
    products: 'Produits',
    about: 'À Propos',
    documents: 'Documents',
    drivingLicenses: 'Permis de Conduire',
    idCards: 'Cartes d\'Identité',
    featuredProducts: 'Produits en Vedette',
    shopByCurrency: 'Acheter par Devise',
    hello: 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
    typeMessage: 'Écrivez votre message...',
    liveChat: 'Chat en Direct',
    agentTyping: 'L\'agent écrit...',
    thankYou: 'Merci pour votre message! Cliquez sur notre lien de contact pour parler directement au service client.',
    ourMission: 'Notre Mission',
    missionText: 'Chez Realnotes, nous nous engageons à fournir une plateforme sécurisée et efficace pour les transactions internationales.',
    getInTouch: 'Contactez-nous',
    sendMessage: 'Envoyer le Message',
    followUs: 'Suivez-nous',
    newsletter: 'Newsletter',
    subscribe: 'S\'abonner'
  },
  Español: {
    platformName: 'Realnotes',
    explore: 'Cómo Comprar Dinero, Tarjetas de Identidad y Licencias de Conducir en Línea',
    contact: 'Contáctenos',
    contactSeller: 'Contactar al Vendedor',
    products: 'Productos',
    about: 'Sobre Nosotros',
    documents: 'Documentos',
    drivingLicenses: 'Licencias de Conducir',
    idCards: 'Tarjetas de Identidad',
    featuredProducts: 'Productos Destacados',
    shopByCurrency: 'Comprar por Moneda',
    hello: '¡Hola! ¿Cómo puedo ayudarte hoy?',
    typeMessage: 'Escribe tu mensaje...',
    liveChat: 'Chat en Vivo',
    agentTyping: 'El agente está escribiendo...',
    thankYou: '¡Gracias por tu mensaje! Haz clic en nuestro enlace de contacto para hablar directamente con servicio al cliente.',
    ourMission: 'Nuestra Misión',
    missionText: 'En Realnotes, nos comprometemos a proporcionar una plataforma segura y eficiente para transacciones internacionales.',
    getInTouch: 'Contáctanos',
    sendMessage: 'Enviar Mensaje',
    followUs: 'Síguenos',
    newsletter: 'Boletín',
    subscribe: 'Suscribirse'
  },
  Deutsch: {
    platformName: 'Realnotes',
    explore: 'Wie man Geld, Ausweise und Führerscheine Online Kauft',
    contact: 'Kontakt',
    contactSeller: 'Verkäufer Kontaktieren',
    products: 'Produkte',
    about: 'Über Uns',
    documents: 'Dokumente',
    drivingLicenses: 'Führerscheine',
    idCards: 'Ausweise',
    featuredProducts: 'Ausgewählte Produkte',
    shopByCurrency: 'Nach Währung Einkaufen',
    hello: 'Hallo! Wie kann ich Ihnen heute helfen?',
    typeMessage: 'Nachricht eingeben...',
    liveChat: 'Live-Chat',
    agentTyping: 'Agent schreibt...',
    thankYou: 'Vielen Dank für Ihre Nachricht! Klicken Sie auf unseren Kontakt-Link, um direkt mit dem Kundenservice zu sprechen.',
    ourMission: 'Unsere Mission',
    missionText: 'Bei Realnotes setzen wir uns für eine sichere und effiziente Plattform für internationale Transaktionen ein.',
    getInTouch: 'Kontaktieren Sie Uns',
    sendMessage: 'Nachricht Senden',
    followUs: 'Folgen Sie Uns',
    newsletter: 'Newsletter',
    subscribe: 'Abonnieren'
  },
  中文: {
    platformName: 'Realnotes',
    explore: '如何在线购买货币、身份证和驾驶执照',
    contact: '联系我们',
    contactSeller: '联系卖家',
    products: '产品',
    about: '关于我们',
    documents: '证件',
    drivingLicenses: '驾驶执照',
    idCards: '身份证',
    featuredProducts: '精选产品',
    shopByCurrency: '按币种购物',
    hello: '您好！今天我能为您做什么？',
    typeMessage: '输入消息...',
    liveChat: '在线客服',
    agentTyping: '客服正在输入...',
    thankYou: '感谢您的留言！点击我们的联系链接直接与客服对话。',
    ourMission: '我们的使命',
    missionText: '在Realnotes，我们致力于为国际交易提供安全高效的平台。',
    getInTouch: '联系我们',
    sendMessage: '发送消息',
    followUs: '关注我们',
    newsletter: '新闻订阅',
    subscribe: '订阅'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['English'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage: setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};