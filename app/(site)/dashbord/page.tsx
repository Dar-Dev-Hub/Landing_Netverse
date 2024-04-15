"use client";
import DashboardLayout from "./layout";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Dashbordc from "@/components/Dashbord/dashboard";

const DashboardPage: React.FC = () => {
  const router = useRouter(); // This line should be within your functional component
  const { loggedIn } = useAuth();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, []);
  useEffect(() => {
    if (loggedIn) {
      router.push('/dashbord'); // Redirect to dashboard if logged in
    }
  }, [loggedIn, router]);

  if (loggedIn) {
    return (
      <DashboardLayout>
        <Dashbordc />
      </DashboardLayout>
    );
  } else {
    // You can also display a loading indicator here
    return null;
  }
};

export default DashboardPage;
