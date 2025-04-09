import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const currencySymbols: Record<string, string> = {
  eur: '€',
  cad: 'C$',
  aud: 'A$',
  usd: '$',
  gbp: '£',
  chf: 'CHF'
};

const currencyNames: Record<string, string> = {
  eur: 'Euro',
  cad: 'Canadian Dollar',
  aud: 'Australian Dollar',
  usd: 'US Dollar',
  gbp: 'British Pound',
  chf: 'Swiss Franc'
};

const products = {
  eur: [
    {
      id: 1,
      name: "50 Euro",
      price: "",
      description: "want to buy high-quality notes euro?When you buy fake euro online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/SdipHyX.jpg",
    },
    {
      id: 2,
      name: "10 Euro",
      price: "",
      description: "want to buy high-quality notes euro?When you buy fake euro online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/JojRdYX.jpg",
    },
    {
      id: 3,
      name: "100 Euro",
      price: "",
      description: "want to buy high-quality notes euro?When you buy fake euro online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/8y7K1Dj.jpg",
    },
    {
      id: 4,
      name: "20 Euro",
      price: "",
      description: "want to buy high-quality notes euro?When you buy fake euro online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/9O00KLe.jpg",
    },
    {
      id: 5,
      name: "200 Euro",
      price: "",
      description: "want to buy high-quality notes euro?When you buy fake euro online, you want to sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/OfD7Dqe.png",
    },
    {
      id: 5,
      name: "500 Euro",
      price: "",
      description: "want to buy high-quality notes euro?When you buy fake euro online, you want to sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/fJxgLPQ.png",
    }
  ],
  usd: [
    {
      id: 1,
      name: "1 USD",
      price: "",
      description: "want to buy high-quality notes usd?When you buy fake usd online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real usd.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/tZDRs3U.jpg",
    },
    {
      id: 3,
      name: "5 USD",
      price: "",
      description: "want to buy high-quality notes usd?When you buy fake usd online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real usd.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/OSL7Fsf.jpg",
    },
    {
      id: 4,
      name: "10 USD",
      price: "",
      description: "want to buy high-quality notes usd?When you buy fake usd online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real usd.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/JP97FAP.jpg",
    },
    {
      id: 5,
      name: "20 USD",
      price: "",
      description: "want to buy high-quality notes usd?When you buy fake usd online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real usd.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/PPBsLRX.jpg",
    },
    {
      id: 6,
      name: "50 USD",
      price: "",
      description: "want to buy high-quality notes usd?When you buy fake usd online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real usd.Available Denomination of Fake Money...      ",
      image: "https://i.imgur.com/JvhE68V.jpg",
    },
    {
      id: 7,
      name: "100 USD",
      price: "",
      description: "Premium 100 USD notes want to buy high-quality notes usd?When you buy fake usd online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real usd.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/bpIxWcD.jpg",
    }
    

    
  ],
  gbp: [
    {
      id: 1,
      name: "5 GBP",
      price: "",
      description: "want to buy high-quality notes gbp?When you buy fake gbp online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit Australian dollars are made with the latest printing technology and are virtually indistinguishable from real gbp.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/VNXCTbm.jpg",
    },
    
    
    {
      id: 2,
      name: "10 GBP",
      price: "",
      description: "want to buy high-quality notes gbp?When you buy fake gbp online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit Australian dollars are made with the latest printing technology and are virtually indistinguishable from real gbp.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/oiHNkOK.jpg",
    },
    {
      id: 3,
      name: "20 GBP",
      price: "",
      description: "want to buy high-quality notes gbp?When you buy fake gbp online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit Australian dollars are made with the latest printing technology and are virtually indistinguishable from real gbp.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/xeu7V6H.jpg",
    },
    {
      id: 4,
      name: "50 GBP",
      price: "",
      description: "want to buy high-quality notes gbp?When you buy fake gbp online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit Australian dollars are made with the latest printing technology and are virtually indistinguishable from real gbp.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/Yq9XEib.jpg",
    }

  ],
  aud: [
    {
      id: 1,
      name: "5 AUD",
      price: "",
      description: "Premium quality want to buy high-quality notes aud?When you buy fake aud online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money... AUD notes",
      image: "https://i.imgur.com/4yb8qNr.jpg",
    },
    {
      id: 2,
      name: "10 AUD",
      price: "",
      description: "want to buy high-quality notes aud ?When you buy fake aud online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/Xnk396B.jpg",
    },
    {
      id: 3,
      name: "50 AUD",
      price: "",
      description: "want to buy high-quality notes aud ?When you buy fake aud online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/1QNcoU7.jpg",
    },
    {
      id: 4,
      name: "100 AUD",
      price: "",
      description: "want to buy high-quality notes aud?When you buy fake aud online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/1HWOO3C.jpg",
    },
    {
      id: 4,
      name: "20 AUD",
      price: "",
      description: "want to buy high-quality notes aud ?When you buy fake aud online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/5XtOi2N.jpg",
    }
  ],
  chf: [
    {
      id: 1,
      name: "1000 CHF",
      price: "",
      description: "want to buy high-quality notes chf ?When you buy fake chf online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/WAjcJFC.jpg",
    },
    {
      id: 2,
      name: "100 CHF",
      price: "",
      description: "want to buy high-quality notes chf ?When you buy fake chf online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/KDciDiX.jpg",
    },
    {
      id: 3,
      name: "50 CHF",
      price: "",
      description: "want to buy high-quality notes chf?When you buy fake chf online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/CLzkVtE.jpg",
    },
    {
      id: 5,
      name: "200 CHF",
      price: "",
      description: "want to buy high-quality notes chf?When you buy fake chf online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/aWmP09h.jpg",
    },
    {
      id: 6,
      name: "10 CHF",
      price: "",
      description: "want to buy high-quality notes chf?When you buy fake chf online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/QORFeL1.jpg",
    },
    {
      id: 7,
      name: "20 CHF",
      price: "",
      description: "want to buy high-quality notes chf?When you buy fake chf online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/i70XwWl.png",
    }

  ],
  cad: [
    {
      id: 1,
      name: "5 CAD",
      price: "",
      description: "want to buy high-quality notes cad?When you buy fake cad online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/iq2SGlp.jpg",
    },
    {
      id: 2,
      name: "10 CAD",
      price: "",
      description: "want to buy high-quality notes cad?When you buy fake cad online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/SBKy8qd.jpgg",
    },
    {
      id: 3,
      name: "20 CAD",
      price: "",
      description: "want to buy high-quality notes cad?When you buy fake cad online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/laZR0Ss.jpg",
    },
    {
      id: 4,
      name: "50 CAD",
      price: "",
      description: "want to buy high-quality notes cad?When you buy fake cad online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/B4c0ZOl.png",
    },
    {
      id: 5,
      name: "100 CAD",
      price: "",
      description: "want to buy high-quality notes cad ?When you buy fake cad online, you want to make sure that you are getting high-quality counterfeit money.The best counterfeit us dollars are made with the latest printing technology and are virtually indistinguishable from real euro.Available Denomination of Fake Money...",
      image: "https://i.imgur.com/7yI4Dkd.jpg",
    }
  ]
};

function CategoryPage() {
  const { currency } = useParams<{ currency: string }>();
  const symbol = currency ? currencySymbols[currency] : '$';
  const name = currency ? currencyNames[currency] : 'Unknown Currency';
  
  const categoryProducts = currency && products[currency as keyof typeof products] 
    ? products[currency as keyof typeof products]
    : [];

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Products in {name} ({symbol})
        </h1>
        <p className="text-gray-600">
          Browse our selection of products priced in {name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No products available in this currency at the moment.</p>
        </div>
      )}
    </main>
  );
}

export default CategoryPage;