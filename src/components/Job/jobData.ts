
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
  tag: string[];
  location: string;
  publishDate: string;
};


export const JobData: JobProps[] = [
  {
    id: 1,
    title: "Software Engineer",
    location: "Lagos",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Omoniyi Dokun",
      image: "/images/blog/author-01.png",
      designation: "Recruiter",
    },
    tag: ["tech"],
    publishDate: today,
  },
  {
    id: 2,
    title: "Devops Engineer",
    location: "Lagos",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Omoniyi Dokun",
      image: "/images/blog/author-01.png",
      designation: "Recruiter",
    },
    tag: ["tech"],
    publishDate: today,
  },
  {
    id: 3,
    title: "Cybersecurity Engineer",
    location: "Lagos",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Omoniyi Dokun",
      image: "/images/blog/author-01.png",
      designation: "Recruiter",
    },
    tag: ["tech"],
    publishDate: today,
  },
  {
    id: 4,
    title: "Nursing Assistant",
    location: "Abuja",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Felix Omokodion",
      image: "/images/blog/author-02.png",
      designation: "Recruiter",
    },
    tag: ["healthcare"],
    publishDate: today,
  },
  {
    id: 5,
    title: "Medical Assistant",
    location: "Lagos",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Felix Omokodion",
      image: "/images/blog/author-02.png",
      designation: "Recruiter",
    },
    tag: ["healthcare"],
    publishDate: today,
  },
  {
    id: 6,
    title: "Offshore Nurse",
    location: "Port Harcourt",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Felix Omokodion",
      image: "/images/blog/author-02.png",
      designation: "Recruiter",
    },
    tag: ["healthcare", "energy"],
    publishDate: today,
  },
  {
    id: 7,
    title: "Petroleum Engineer",
    location: "Delta",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anu Banwo",
      image: "/images/blog/author-03.png",
      designation: "Recruiter",
    },
    tag: ["energy"],
    publishDate: today,
  },
  {
    id: 8,
    title: "Roughnecks",
    location: "Port Harcourt",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anu Banwo",
      image: "/images/blog/author-03.png",
      designation: "Recruiter",
    },
    tag:["energy"],
    publishDate: today,
  },
  {
    id: 9,
    title: "Wellsite Engineer",
    location: "Imo",
    paragraph:
      "coming soon.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anu Banwo",
      image: "/images/blog/author-03.png",
      designation: "Recruiter",
    },
    tag: ["energy"],
    publishDate: today,
  },
];
