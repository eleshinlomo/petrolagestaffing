
import Image from "next/image";
import Link from "next/link";
import { JobData } from "./jobData";




const Job = () => {
  
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
        {JobData?.map((job, index)=>
          <div key={index}>
        <Link
          href="/blog-details"
          className="relative block  w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-green-700 px-4 py-2 text-sm font-semibold capitalize text-white">
            {job.tags[0]}
          </span>
          {/* <Image src={job.image} alt="image" fill /> */}
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-green-300 dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {job.title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {job.paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              {/* <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={job.author.image} alt="author" fill />
                </div>
              </div> */}
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Posted by : <p className="text-xs text-body-color">{job.author.designation}</p>
                </h4>
                
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{job.publishDate}</p>
            </div>
          </div>
        </div>

        </div>//End of mapping
        )}
      </div>
      </div>
    </>
  );
};

export default Job;
