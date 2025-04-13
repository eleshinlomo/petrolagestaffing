'use client'
import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";
import SectionTitle from "@/components/Common/SectionTitle";
import { usePathname } from "next/navigation";

const JobPage = () => {

  const path = usePathname()

  return (
    <section
      id="blog"
      className={`bg-gray-light dark:bg-bg-color-dark  ${path === '/' ? "lg:py-2 py-2 md:py-2" : "lg:py-24 py-24 md:py-24"}`}
    >
      <div className="container">
        <SectionTitle
          title="Latest Jobs"
          paragraph="See latest opportunities in Nigeria."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobPage;
