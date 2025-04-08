import { JobProps } from "./SingleJob";

const jobData: JobProps[] = [
  {
    id: 1,
    title: "Explore jobs in IT",
    paragraph:
      "Explore exciting IT job opportunities in Nigeria.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Shawn Polis",
      image: "/images/blog/author-01.png",
      designation: "IT Recruiter",
    },
    tags: ["computer"],
    publishDate: "Latest",
  },
  {
    id: 2,
    title: "Explore jobs in Healthcare",
    paragraph:
      "Expolore exciting opportunities in the Nigerian Healthcare sector.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Adetoun Waters",
      image: "/images/blog/author-02.png",
      designation: "Healthcare Recruiter",
    },
    tags: ["healthcare"],
    publishDate: "Latest",
  },
  {
    id: 3,
    title: "Explore jobs in Oil & Gas",
    paragraph:
      "Explore exciting opportunities in the Nigerian Oil and Gas sector.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Shane Bulls",
      image: "/images/blog/author-03.png",
      designation: "Oil & Gas Recruiter",
    },
    tags: ["oil&gas"],
    publishDate: "Latest",
  },
];
export default jobData;
