import Image from "next/image";
import Link from "next/link";

interface RelatedPostProps {

  image: string;
  slug: string;
  title: string;
  date: string;

}

const RelatedJobPost = ({image, slug, title, date}: RelatedPostProps) => {
  return (
    <div className="flex items-center lg:block xl:flex">
    
      <div className="w-full">
        <h5>
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color">{date}</p>
      </div>
    </div>
  );
};

export default RelatedJobPost;
