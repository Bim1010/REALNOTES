import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  useLanguage();

  const features: any[] = [
    
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-6">OUR PRODUCTS</h1>
            <p className="text-xl">
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8"> .....</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            Do you have banknotes that are secure or stained with ink (black, green, blue or red)?

            Our solutions for cleaning banknotes covered in ink:
 
 SSD chemical solution for cleaning black ink stained banknotes.

            <img src="https://i.imgur.com/knZTqoM.jpg" alt="Mission 3" className="w-50/3 rounded-lg shadow-md" />

            This is an anti-money laundering chemical for banknotes designed to remove excess coatings. SSD Universal Solution works best when combined with Activation Powder.

 

Grade A SSD solution , compared to other SSD components, is more efficient and gives fast result.

 

The SSD Universal Solution can also be used without powder. The SSD solution dissolves the coating substance and dye safely and effectively without damaging the banknote. The banknote can be cleaned in seconds by applying the correct SSD solution, and the banknote can be changed at any bank without worry.

 

SSD Solution
It is found in three different forms:

SSD Solution
SSD Supreme Solution
SSD Ultimate Solution
                
              <img src="https://i.imgur.com/wxzbndr.jpg" alt="Mission 1" className="w-50/3 rounded-lg shadow-md" />
              The SSD solution must be mixed with different chemical components depending on the desired result.

SSD Supreme solution contains Vectrol paste and humic powder. Mixing these chemicals may cause combustion, flames, or even explosions.

SSD Ultimate Solution contains Castox and Humin powder. As mentioned, depending on the results, you can use the SSD solution separately, as it is cheaper, or use SSD Ultimate Solution as a safer and more reliable alternative.

 

Vectrol Paste
 

Vectrol Paste is a compound used with SSD Solution for cleaning densely coated banknotes. It is the compound that softens hard paper into a heat-resistant paper.

This is an essential chemical if you are dealing with black banknotes or those that have been exposed to heat and cold.

If you're interested in purchasing this chemical compound, it comes in a bottle protected by an aluminum sleeve and placed in a cardboard box. Its standard packaging is 1.25 liters and 1.5 liters. The chemical has an unpleasant odor, but it disappears when the bill dries.

 

The expertise of the PRODIGA Laboratory
 

Our laboratory manufactures, formulates, and distributes specialty chemicals worldwide. The company acquires, operates, and preserves currency, selling electronic chemicals and banknote preservation products.

Our banknote cleaning branch produces and supplies chemical and electronic solutions. We offer wet treatments as well as semiconductor electronic products to preserve banknotes for a very long time or to clean them.

We deal primarily with industrial clients who use these preservatives, primarily to extend the useful life of the banknotes in their care.

Blackened or stained money can be difficult to clean to restore its legal tender value, especially if you use the wrong type of chemicals. The condition of the coated bills is important because it determines the type of chemical to use and the proportions of the mixture.

However, we encourage our customers to try things out on our site.

This means that the coated money (banknotes) is tested in your presence by an experienced technician who will recommend the type and quantity of chemical, as well as the ratio of components to be used in the chemical mixture.
            <img src="https://i.imgur.com/Vs48flE.jpg" alt="Mission 2" className="w-50/3 rounded-lg shadow-md" />

            .........................................................................................................
            <img src="https://i.imgur.com/PM0o1Z7.jpg" alt="Mission 2" className="w-50/3 rounded-lg shadow-md" />
            ..........................................................................................................

           
            </p>
          </div>
        </div>
        
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-indigo-100">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">    </h2>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;