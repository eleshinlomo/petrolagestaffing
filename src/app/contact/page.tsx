import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Petrolage recruitment",
  description: "This is Contact Page for Petrolage",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    

      <Contact />
    </>
  );
};

export default ContactPage;
