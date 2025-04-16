
import Image from 'next/image'

interface TestimonialProps {
    id: number;
    name: string;
    designation: string;
    content: string;
    image: string;
    star: number;
}

const starIcon = (
  <svg width="20" height="19" viewBox="0 0 20 19" className="fill-current text-yellow-400">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

const testimonialData: TestimonialProps[] = [
  {
    id: 1,
    name: "Adetoun Waters",
    designation: "Nurse",
    content:
      "Petrolage played a crucial role in securing my current position. Their recruiters demonstrated unparalleled professionalism throughout the process.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Phillips Ned",
    designation: "Software Engineer",
    content:
      "I found my current job through Petrolage. I recommend this platform to anyone looking for opportunities in the Nigerian tech. Big thanks to the team.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Shane Bulls",
    designation: "Petroleum Engineer",
    content:
      "After finishing my masters in Petroleum Engineering, I started applying for jobs on this platform. Today I work with a company I love. Grateful to the Petrolage team.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-950 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-300 max-w-3xl mx-auto">
            Hear from professionals who found their dream jobs through Petrolage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-blue-800/20 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-700/50 hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(item.star)].map((_, i) => (
                  <span key={i}>{starIcon}</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="mb-6 text-blue-600/90 dark:text-blue-200/80 italic leading-relaxed">
                {item.content}
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center mt-8 pt-6 border-t border-blue-100 dark:border-blue-700/30">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-200 dark:border-blue-600">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-blue-500 dark:text-blue-300">
                    {item.designation}
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-blue-400/10 dark:bg-blue-300/10"></div>
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-blue-600/10 dark:bg-blue-400/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;