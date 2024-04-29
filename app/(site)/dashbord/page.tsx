"use client"
import DashboardLayout from "./layout"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from "react"
import Dashbordc from "@/components/Dashbord/dashboard"
import ProjectCard from "../wallets/page"
// import useAuthorization from "@/components/Services/useAuthorization"
import { useAuthorization } from "@/components/Services/useAuthorization"
const DashboardPage: React.FC = () => {
  const router = useRouter(); // This line should be within your functional component

  const { authorizeUser } = useAuthorization({ router });
  const memoizedAuthorizeUser = useCallback(authorizeUser, []);


  useEffect(() => {
    memoizedAuthorizeUser();
  }, [memoizedAuthorizeUser]);

  // useEffect(() => {
  //   memoizedAuthorizeUser();
  // }, [memoizedAuthorizeUser])
  return (
    <DashboardLayout>
      <Dashbordc>
        <ProjectCard title={"hello"} totalTasks={1000} />
      </Dashbordc>
    </DashboardLayout>
  );
};

export default DashboardPage;