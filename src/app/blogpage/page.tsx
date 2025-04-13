import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";
import SectionTitle from "@/components/Common/SectionTitle";

const BlogPage = () => {

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-24 md:py-24 lg:py-24"
    >
      <div className="container">
        <SectionTitle
          title="Latest Blogs"
          paragraph="Read about what we are working on."
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

export default BlogPage;
