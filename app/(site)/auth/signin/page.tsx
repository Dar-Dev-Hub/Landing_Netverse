import Signin from "@/components/Auth/Signin";
import MainLayout from "@/components/LandingLayout/Layout";
import { Metadata } from "next";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const SigninPage = () => {

  return (
    <MainLayout>
       <>
      <Signin />
    </>
    </MainLayout>
   
  );
};

export default SigninPage;
