
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import JobPage from "../jobpage/page";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Petrolage Staffing",
  description: "This is Home for Petrolage",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <JobPage />
      
      <Services />
      <Testimonials />
      
      <Contact />
    </>
  );
}
