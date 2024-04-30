import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";

import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import DashboardPage from "./dashbord/page";
import MainLayout from "@/components/LandingLayout/Layout";

export const metadata: Metadata = {
  title: "Netverse - Home",
  description: "This is Home for Netverse",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <MainLayout>
        <Blog />
        <Hero />
        <Feature />
        <About />
        <FeaturesTab />
        <CTA />
        <Contact />
      </MainLayout>

    </main>
  );
}
