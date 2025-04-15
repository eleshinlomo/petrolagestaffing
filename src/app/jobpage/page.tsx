'use client'
import { JobData } from "@/components/Job/jobData";
import SectionTitle from "@/components/Common/SectionTitle";
import { usePathname } from "next/navigation";
import Job from "@/components/Job/Job";

const JobPage = () => {

  const path = usePathname()

  return (
    <section
      id="blog"
      className={`bg-gray-light dark:bg-bg-color-dark  ${path === '/' ? "lg:py-2 py-2 md:py-2" : "lg:py-24 py-24 md:py-24"}`}
    >
      <div className="">
      

        <div className="">
        <Job />
        </div>
      </div>
    </section>
  );
};

export default JobPage;
