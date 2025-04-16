import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="18" height="14" viewBox="0 0 18 14" className="fill-white">
    <path d="M6.116 13.173c-.234.234-.547.234-.781 0L.246 7.902a.553.553 0 0 1 0-.782L2.126 5.24a.553.553 0 0 1 .782 0L6.116 8.51c.234.234.614.234.848 0l8.789-8.79a.553.553 0 0 1 .782 0l1.88 1.88a.553.553 0 0 1 0 .782L6.116 13.173z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-6 flex items-center text-lg font-medium text-blue-800 dark:text-blue-100">
      <span className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-950 py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-6">
                Powering Nigeria&apos;s Job Market
              </h2>
              <p className="text-lg text-blue-600 dark:text-blue-300">
                Petrolage was founded in 2015 as a boutique staffing agency in Lagos, Nigeria, Petrolage began with a simple vision: to connect exceptional talent with forward-thinking companies. What started as a small team with big dreams has blossomed into one of Africa&apos;s leading staffing solutions providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <List text="IT & Technology" />
                <List text="Healthcare" />
                <List text="Oil & Gas" />
              </div>
              <div>
                <List text="Telecommunications" />
                <List text="Finance" />
                <List text="Real Estate" />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-blue-800/50">
              <Image
                src="/images/logos/petrolage_logo.png"
                alt="Petrolage Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">We Are</h3>
                <p className="text-blue-100">Dedicated professionals connecting talent with opportunity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white dark:bg-blue-800/20 p-6 rounded-xl shadow-md border border-blue-100 dark:border-blue-700/50">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">50K+</h3>
            <p className="text-blue-800 dark:text-blue-100">Jobs Posted</p>
          </div>
          <div className="bg-white dark:bg-blue-800/20 p-6 rounded-xl shadow-md border border-blue-100 dark:border-blue-700/50">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">100+</h3>
            <p className="text-blue-800 dark:text-blue-100">Companies</p>
          </div>
          <div className="bg-white dark:bg-blue-800/20 p-6 rounded-xl shadow-md border border-blue-100 dark:border-blue-700/50">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">200K+</h3>
            <p className="text-blue-800 dark:text-blue-100">Professionals</p>
          </div>
          <div className="bg-white dark:bg-blue-800/20 p-6 rounded-xl shadow-md border border-blue-100 dark:border-blue-700/50">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">8+</h3>
            <p className="text-blue-800 dark:text-blue-100">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;