import { Feature } from "@/types/feature";
import React from "react";

interface ServiceProps {
  id: number;
  title: string;
  paragraph: string;
}

export const ServiceData: ServiceProps[] = [
  {
    id: 1,
    
    title: "Staffing Solution",
    paragraph:
      "We offer top notch staffing solution by providing the best hands for your most difficult projects. Our candidates pipelines covers both local and expats.",
  },
  {
    id: 2,
    title: "Executive Search",
    paragraph:
      "Our clients retain us to find the best candidates for the job. We have have been offering unmatched retainership result for more than 5 years.",
  },
  {
    id: 3,
    title: "Relocation Support",
    paragraph:
      "We work with both Nigerians and expatraites living abroad, looking to relocate to Nigeria, to land a great job in Nigeria. We are your best work search assistant",
  },
  {
    id: 4,
    title: "AI ",
    paragraph:
      "We are a technology savvy company. We have integrated Artificial Intelligence in our process in order to offer unmatched services to both candidates and clients.",
  },
  {
    id: 5,
    title: "Far Reach",
    paragraph:
      "No matter where you are in any part of the world, we can reach you and have your start the process of getting your dream job in Nigeria.",
  },
  {
    id: 6,
    title: "Market Data",
    paragraph:
      "We are data driven and make data-driven decisions. Aside from being known for excellence in recruitment, we are also a mojor source for data in Nigeria.",
  },
];

