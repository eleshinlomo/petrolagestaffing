import { Brand } from "@/types/brand";
import Image from "next/image";
import {brandsData} from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16 pb-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-100 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-300 max-w-2xl mx-auto">
            We&apos;re proud to collaborate with these innovative companies
          </p>
        </div>
        
        <div className="flex justify-center items-center  rounded-xl shadow-lg  backdrop-blur-sm ">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {brandsData.map((brand, index) => (
              <div 
                className="w-40 h-20 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-blue-200/30 hover:shadow-lg"
                key={index}
              >
                <a
                  href={brand.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="relative flex justify-center items-center bg-blue-700 rounded-2xl w-full shadow-2xl h-full opacity-80 transition hover:opacity-100 dark:opacity-80 dark:hover:opacity-100"
                >
                   <p>
                    <span>{brand.name}</span>
                  </p>
                  {/* <Image 
                    src={brand.image} 
                    alt={brand.name} 
                    fill
                    className=" block dark:hidden" 
                    
                  />
                 
                  <Image 
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