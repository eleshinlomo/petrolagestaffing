'use client'
import {useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { JobData } from '@/components/Job/jobData'
import Link from 'next/link'

const JobDetail = ()=>{

  const [message, setMessage] = useState('coming soon...')

  const params = useParams()
  const {id} = params
  

  const job = JobData.find((job)=>job.id === Number(id))

  const handleSubmit = ()=>{
    setMessage('This feature is under development')
  }
  
  
  return (
    <>
      <div className="group relative px-8  pt-44 overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        
      <div className="">
        {job ?
          <div>

            <div className='relative'>
              <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold capitalize text-white">
               {job.tags}
              </span>
            </div>
          {/* <Image src={job.image} alt="image" fill /> */}
        
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/jobpage/jobdetails/${job.id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-green-300 dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {job.title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {job.paragraph !== 'coming soon.' ? job.paragraph : message }
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            {/* Submit */}
            <div className=' gap-3'>
              <input type='file' />
              <button className='mt-2 bg-blue-500 py-2 px-4 rounded-2xl'
              onClick={handleSubmit}
              >SUBMIT</button>
            </div>
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

        </div>: null//End if
        }
      </div>
      </div>
    </>
  );
};

export default JobDetail