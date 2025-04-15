import { Brand } from "@/types/brand";
import Image from "next/image";
import {brandsData} from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-100 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-300 max-w-2xl mx-auto">
            We&apos;re proud to collaborate with these innovative companies
          </p>
        </div>
        
        <div className="bg-white dark:bg-blue-800/30 rounded-xl shadow-lg p-8 backdrop-blur-sm border border-blue-100 dark:border-blue-700/50">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {brandsData.map((brand, index) => (
              <div 
                className="w-40 h-20 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-blue-200/30 hover:shadow-lg"
                key={index}
              >
                <a
                  href={brand.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="relative w-full shadow-2xl h-full opacity-80 transition hover:opacity-100 dark:opacity-80 dark:hover:opacity-100"
                >
                   <p>
                    <span>{brand.name}</span>
                  </p>
                  {/* <Image 
                    src={brand.image} 
                    alt={brand.name} 
                    fill
                    className="object-contain block dark:hidden" 
                    style={{ filter: 'brightness(0) saturate(100%) invert(25%) sepia(99%) saturate(2000%) hue-rotate(210deg) brightness(90%) contrast(90%)' }}
                  /> */}
                 
                  {/* <Image 
                    src={brand.image} 
                    alt={brand.name} 
                    fill
                    className="object-contain hidden dark:block"
                    style={{ filter: 'brightness(0) saturate(100%) invert(90%) sepia(10%) saturate(500%) hue-rotate(180deg) brightness(110%) contrast(90%)' }}
                  /> */}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;