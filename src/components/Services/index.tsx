import { ServiceData } from "./serviceData";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-950 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-300 max-w-3xl mx-auto">
            Delivering excellence through our specialized solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {ServiceData?.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-blue-800/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-700/50 hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              
              <div className="mb-6 flex items-center">
               
                <h3 className="text-2xl font-bold text-blue-800 dark:text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-blue-600/90 dark:text-blue-200/80 leading-relaxed">
                {service.paragraph}
              </p>
              
              <div className="mt-6 pt-6 border-t border-blue-100 dark:border-blue-700/50">
                <button className="text-blue-600 dark:text-blue-300 font-medium hover:text-blue-800 dark:hover:text-blue-100 transition-colors flex items-center">
                  Learn more
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;