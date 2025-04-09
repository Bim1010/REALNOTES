import ProductCard from '../components/ProductCard';
import { useLanguage } from '../contexts/LanguageContext';
import { Car } from 'lucide-react';

const DocumentsPage = () => {
  const { t } = useLanguage();

  const categories = {
    drivingLicense: {
      title: t('drivingLicenses'),
      icon: Car,
      products: [
        {
          id: 1,
          name: "french Driving License",
          price: "",
          description: "High-quality french driving license",
          image: "https://i.imgur.com/NdY5MnJ.jpg"
        },
        {
          id: 2,
          name: "UK Driving License",
          price: "",
          description: "UK driving license",
          image: "https://i.imgur.com/pOFJ0o2.jpg"
        },
        {
          id: 3,
          name: "US Driving License",
          price: "",
          description: "High-quality US driving license",
          image: "https://i.imgur.com/dBGHzuE.jpg"
        },
        {
          id: 4,
          name: "Australian Driving License",
          price: "",
          description: "Premium Australian driving license",
          image: "https://i.imgur.com/pmy8vXD.jpg"
        },
        {
          id: 5,
          name: "Belgium Driving License",
          price: "",
          description: "Premium belgium driving license",
          image: "https://i.imgur.com/ihxa4IS.jpg"
        },
        {
          id: 6,
          name: "German Driving License",
          price: "",
          description: "Premium german driving license",
          image: "https://i.imgur.com/HbDjbv1.jpg"
        },
      ]
    },
    // Vous pouvez ajouter d'autres catégories ici si nécessaire
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      {Object.entries(categories).map(([key, category]) => {
        const Icon = category.icon;
        return (
          <section key={key} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Icon className="h-8 w-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default DocumentsPage;
