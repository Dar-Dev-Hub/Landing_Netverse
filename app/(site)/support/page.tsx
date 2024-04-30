import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import MainLayout from "@/components/LandingLayout/Layout";

export const metadata: Metadata = {
  title: "Support Page - Netverse",
  description: "This is Support page for Netverse",
  // other metadata
};

const SupportPage = () => {
  return (
    <MainLayout>
       <div className="pb-20 pt-40">
      <Contact />
    </div>
    </MainLayout>
   
  );
};

export default SupportPage;
