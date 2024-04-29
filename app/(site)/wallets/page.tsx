import { PricingCard } from '@/components/Card/card';
import Charts from '@/components/Chart/chart';
import { Coursaccess } from '@/components/Coursaccess/coursaccess';
import Dashbordc from '@/components/Dashbord/dashboard';
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from "react"
import { useAuthorization } from "@/components/Services/useAuthorization"

interface ProjectCardProps {
  title: string;
  totalTasks: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, totalTasks }) => {
  const router = useRouter(); // This line should be within your functional component

  const { authorizeUser } = useAuthorization({ router });
  const memoizedAuthorizeUser = useCallback(authorizeUser, []);

  useEffect(() => {
    memoizedAuthorizeUser();
  }, [memoizedAuthorizeUser]);

  const ac = true;

  return (
    <Dashbordc>
      <div className='ml-20 container mt-10 mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* Centering PricingCard components */}
          <div className="flex justify-center items-center">
            <PricingCard ac={ac}/>
          </div>
          <div className="flex justify-center items-center">
            <PricingCard ac={false}/>
          </div>
        </div>
        <div className='md:flex md:mt-10'>
          <div className='ml-20 md:w-1/2 md:mr-4'>
            <div className='mt-4 md:mt-0'>
              <Coursaccess />
            </div>
          </div>
          <div className='mt-10 mr-10 md:w-1/2'>
            <Charts />
          </div>
        </div>
      </div>
    </Dashbordc>
  );
}

export default ProjectCard;
