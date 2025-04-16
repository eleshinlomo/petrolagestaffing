import AboutSectionOne from "@/components/About/about";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Petrolage",
  description: "This is About page for Petrolage",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
     
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
