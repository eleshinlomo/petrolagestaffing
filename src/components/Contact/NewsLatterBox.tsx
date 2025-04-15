"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-blue-900/20 p-8 shadow-xl border border-blue-100 dark:border-blue-700/50 hover:shadow-2xl transition-shadow duration-300">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-blue-400/10 dark:bg-blue-300/10"></div>
      <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-blue-600/10 dark:bg-blue-400/10"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-blue-800 dark:text-white mb-4">
        Discover Exciting Opportunities Across Nigeria
        </h3>
        <p className="mb-6 pb-6 text-blue-600 dark:text-blue-300 border-b border-blue-100 dark:border-blue-700/30">
        Join thousands of professionals getting early access to Nigeria&apos;s most sought-after positions
        </p>
        
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-5 py-3 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-blue-400/80 dark:placeholder-blue-400 text-blue-800 dark:text-white transition-all"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-5 py-3 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-blue-400/80 dark:placeholder-blue-400 text-blue-800 dark:text-white transition-all"
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            Subscribe Now
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
          
          <p className="text-center text-sm text-blue-500/80 dark:text-blue-300/80 mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 -z-0">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
            fill={theme === "light" ? "url(#paint0_linear_newsletter)" : "url(#paint1_linear_newsletter)"}
          />
          <defs>
            <linearGradient id="paint0_linear_newsletter" x1="-18.3187" y1="55.1044" x2="37.161" y2="15.3509" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_newsletter" x1="-18.3187" y1="55.1044" x2="37.161" y2="15.3509" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" stopOpacity="0.3"/>
              <stop offset="1" stopColor="#93C5FD" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 -z-0">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.5"
            d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
            fill={theme === "light" ? "url(#paint2_linear_newsletter)" : "url(#paint3_linear_newsletter)"}
          />
          <defs>
            <linearGradient id="paint2_linear_newsletter" x1="-0.571054" y1="-37.1717" x2="28.7937" y2="26.7564" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_newsletter" x1="-0.571054" y1="-37.1717" x2="28.7937" y2="26.7564" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" stopOpacity="0.3"/>
              <stop offset="1" stopColor="#93C5FD" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default NewsLatterBox;