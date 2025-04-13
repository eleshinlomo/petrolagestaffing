
const date = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const dayInWords = days[date.getDay()]
const dayInNumber = date.getDate()
const year = date.getFullYear()
const today = `${dayInWords} ${dayInNumber}, ${year}`


type Author = {
  name: string;
  image: string;
  designation: string;
};

export type JobProps = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};


export const JobData: JobProps[] = [
  {
    id: 1,
    title: "Software Engineer",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Omoniyi Dokun",
      image: "/images/blog/author-01.png",
      designation: "Recruiter",
    },
    tags: ["computer"],
    publishDate: today,
  },
  {
    id: 2,
    title: "Nursing Assistant",
    paragraph:
      "coming soon",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Felix Omokodion",
      image: "/images/blog/author-02.png",
      designation: "Recruiter",
    },
    tags: ["healthcare"],
    publishDate: today,
  },
  {
    id: 3,
    title: "Petroleum Engineer",
    paragraph:
      "coming soon",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anu Banwo",
      image: "/images/blog/author-03.png",
      designation: "Recruiter",
    },
    tags: ["oil&gas"],
    publishDate: today,
  },
];
