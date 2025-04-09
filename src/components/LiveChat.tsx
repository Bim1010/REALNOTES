import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Loader2, Send, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isHtml?: boolean;
}

interface LiveChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const LiveChat: React.FC<LiveChatProps> = ({ isOpen }) => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hi how can we help you, leave a question and will get back very soon thanks:

      <a href="https://wa.me/33751215998" target="_blank" class="text-indigo-600 hover:underline">
        <img src="https://i.imgur.com/QQjZ8k5.png" alt="WhatsApp Logo" class="inline-block h-5 w-5 mr-1" /> +33751215998
      </a>
      
      <a href="http://t.me/holawork1" target="_blank" class="text-indigo-600 hover:underline">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram Logo" class="inline-block h-5 w-5 mr-1" /> @holawork1
      </a>`,
      
      
      isUser: false,
      timestamp: new Date(),
      isHtml: true
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(isOpen);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsChatOpen(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: t('thankYou'),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Icônes WhatsApp & Telegram à gauche */}
      <div className="fixed bottom-10 left-10 flex space-x-4 z-50">
        <a href="https://wa.me/33751215998" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition">
          <img src="https://i.imgur.com/QQjZ8k5.png" alt="WhatsApp" className="h-12 w-12" />
        </a>
        <a href="http://t.me/holawork1" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="h-12 w-12" />
        </a>
      </div>
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50">
          <div className="p-4 bg-indigo-600 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-semibold">{t('liveChat')}</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${message.isUser ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {message.isHtml ? (
                    <p className="text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: message.text }} />
                  ) : (
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  )}
                  <span className="text-xs opacity-75 mt-1 block">{message.timestamp.toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2 text-gray-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">{t('agentTyping')}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('typeMessage')}
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button onClick={handleSend} className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
