import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-950 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-8/12">
            <div
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-blue-800/20 p-8 shadow-xl border border-blue-100 dark:border-blue-700/50"
              data-wow-delay=".15s"
            >
              <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-blue-400 opacity-10"></div>
              <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-blue-600 opacity-10"></div>
              
              <h2 className="mb-4 text-3xl font-bold text-blue-800 dark:text-white">
                Get In Touch With Us
              </h2>
              <p className="mb-8 text-lg text-blue-600 dark:text-blue-300">
                Our support team will get back to you within 24 hours
              </p>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-blue-700 dark:text-blue-200"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-5 py-3 text-blue-800 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:placeholder-blue-400 dark:text-white transition-all"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-blue-700 dark:text-blue-200"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-3 text-blue-800 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:placeholder-blue-400 dark:text-white transition-all"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-blue-700 dark:text-blue-200"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-3 text-blue-800 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:placeholder-blue-400 dark:text-white transition-all"
                    ></textarea>
                  </div>
                  
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Newsletter Box */}
          <div className="w-full lg:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;