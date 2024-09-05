import SectionTitle from "../Common/SectionTitle";
import SingleJob from "./SingleJob";
import jobData from "./jobData";
import { JobProps } from "./SingleJob";


const Job = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-2 md:py-2 lg:py-2"
    >
      <div className="container">
        <SectionTitle
          title="Latest Jobs"
          paragraph="New jobs added by clients every day. Explore your next opportunity in Nigeria."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {jobData.map((job: JobProps ) => (
            <div key={job.id} className="w-full">
              <SingleJob 
               id={job.id}
               title = {job.title}
                image={job.image}
                paragraph={job.paragraph}
                author={job.author}
                tags={job.tags}
                publishDate={job.publishDate}
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Job;
