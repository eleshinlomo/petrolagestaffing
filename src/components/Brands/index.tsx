import { Brand } from "@/types/brand";
import Image from "next/image";
import {brandsData} from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-2">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 bg-gray-light dark:bg-gray-dark" >
            <p className="pt-4 text-center text-gray-100 font-bold text-xl">Some of the clients we have worked with</p>
            <div className="flex flex-wrap items-center justify-center rounded-sm  px-8 py-8  sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {/* Brands */}
              {brandsData.map((brand, index) => (
                <div className="flex w-1/2 items-center justify-center px-3 py-[5px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" key={index}>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="relative h-5 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
                >
                  <Image src={brand.image} alt={brand.name} fill className="block dark:hidden" />
                  <span className="hidden dark:block"> {brand.name} </span>
                  
                </a>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

// const SingleBrand = ({ brand }: { brand: Brand }) => {
//   const { href, image, imageLight, name } = brand;

//   return (
//     <div className="flex w-1/2 items-center justify-center px-3 py-[5px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
//       <a
//         href={href}
//         target="_blank"
//         rel="nofollow noreferrer"
//         className="relative h-5 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
//       >
//         <Image src={imageLight} alt={name} fill className="hidden dark:block" />
//         <Image src={image} alt={name} fill className="block dark:hidden" />
//       </a>
//     </div>
//   );
// };
