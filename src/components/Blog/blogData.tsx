import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Explore jobs in IT",
    paragraph:
      "We are transitioning entire staffing process online starting August 1st, 2025",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Omoniyi Dokun",
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
      "We are transitioning entire staffing process online starting August 1st, 2025",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Fleix Omokodion",
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
      "We are transitioning entire staffing process online starting August 1st, 2025",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anu Banwo",
      image: "/images/blog/author-03.png",
      designation: "Oil & Gas Recruiter",
    },
    tags: ["oil&gas"],
    publishDate: "Latest",
  },
];
export default blogData;
