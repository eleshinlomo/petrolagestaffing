'use client'
import { useParams } from "next/navigation"
import { JobData } from "@/components/Job/jobData"
import Link from 'next/link'

const SortBasedOnTag = ()=>{

 const params = useParams()
 const tag = params.tag.toString()
 const capTag = tag.charAt(0).toUpperCase() + tag.slice(1)
 console.log('TAG', capTag)

 const sortedJobs = JobData.filter((job)=>job.tag[0] === tag)

 return (
  <section className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-950 py-32 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4">
          Latest {capTag ? capTag : null} Jobs
        </h2>
        <p className="text-xl text-blue-600 dark:text-blue-300 max-w-3xl mx-auto">
          Explore exciting {capTag ? capTag : null} opportunities in Nigeria
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedJobs?.map((job, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-blue-800/20 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-700/50 hover:border-blue-300 dark:hover:border-blue-500"
          >
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="absolute right-4 top-4 z-20 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold capitalize text-blue-600 shadow-md hover:bg-blue-50 transition-colors">
               <a href={`/jobpage/jobdetails/${job.id}`}> Apply Now</a>
              </span>
              {/* Uncomment if you have job images */}
              {/* <Image 
                src={job.image} 
                alt="job image" 
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              /> */}
              <div className="text-white text-2xl font-bold text-center p-4">
                {job.title.split(' ')[0]} <span className="text-blue-200">{job.title.split(' ').slice(1).join(' ')}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="mb-3">
                <Link
                  href={`/jobpage/jobdetails/${job.id}`}
                  className="text-xl font-bold text-blue-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-300 transition-colors"
                >
                  {job.title}
                </Link>
              </h3>
              <p className="mb-6 text-blue-600/90 dark:text-blue-200/80 border-b border-blue-100 dark:border-blue-700/50 pb-6">
                {job.paragraph}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    {/* Uncomment if you have author images */}
                    {/* <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-blue-200">
                      <Image src={job.author.image} alt="author" fill className="object-cover" />
                    </div> */}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-700 dark:text-blue-100">
                      Posted by
                    </h4>
                    <p className="text-xs text-blue-500 dark:text-blue-300">
                      {job.author.designation}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <h4 className="text-sm font-medium text-blue-700 dark:text-blue-100">
                    Posted on
                  </h4>
                  <p className="text-xs text-blue-500 dark:text-blue-300">
                    {job.publishDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default SortBasedOnTag