import { useNavigate } from 'react-router-dom';
import { Euro as EuroSign, DollarSign, PoundSterling } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../contexts/LanguageContext';

const categories = [
  {
    id: 'eur',
    name: 'Euro Zone',
    symbol: '€',
    icon: EuroSign,
    image: 'https://i.imgur.com/WCRwY2z.png',
    description: ''
  },
  {
    id: 'cad',
    name: 'Canadian Dollar',
    symbol: 'C$',
    icon: DollarSign,
    image: 'https://i.imgur.com/cw5fw6Z.png',
    description: ' '
  },
  {
    id: 'aud',
    name: 'Australian Dollar',
    symbol: 'A$',
    icon: DollarSign,
    image: 'https://i.imgur.com/KXy73UM.png',
    description: ''
  },
  {
    id: 'usd',
    name: 'US Dollar',
    symbol: '$',
    icon: DollarSign,
    image: 'https://i.imgur.com/nFuUgQS.png',
    description: ''
  },
  {
    id: 'gbp',
    name: 'British Pound',
    symbol: '£',
    icon: PoundSterling,
    image: 'https://i.imgur.com/cw5fw6Z.png',
    description: ' '
  },
  {
    id: 'chf',
    name: 'Swiss Franc',
    symbol: 'CHF',
    icon: DollarSign,
    image: 'https://i.imgur.com/usqNqcz.png',
    description: ''
  }
];

const products = [
  {
    id: 1,
    name: "Fake cad bill",
    price: "",
    description: "want to buy high-quality notes euro?When you buy fake gbp online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
    image: "https://i.imgur.com/7yI4Dkd.jpg"
  },
  {
    id: 2,
    name: "british pound",
    price: "",
    description: "want to buy high-quality notes euro?When you buy fake gbp online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
    image: "https://i.imgur.com/PaQ6Lu8.png"
  },
  {
    id: 3,
    name: "fake australian dollar",
    price: "",
    description: "want to buy high-quality notes euro?When you buy fake gbp online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
    image: "https://i.imgur.com/KXy73UM.png"
  },
  {
    id: 5,
    name: "fake euro bills",
    price: "",
    description: "want to buy high-quality notes euro?When you buy fake gbp online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
    image: "https://i.imgur.com/WCRwY2z.png"
  }
];

function HomePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="flex-grow container mx-auto px-8 py-8 max-w-7xl">
      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('shopByCurrency')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => navigate(`/category/${category.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform group-hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-contain bg-white p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center mb-2">
                      <Icon className="h-6 w-6 text-white mr-2" />
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    </div>
                    <p className="text-gray-200 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('featuredProducts')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;