"use client";
import Dashbordc from '@/components/Dashbord/dashboard';
import ProfileDetailsUpdate from '@/components/Profile/ProfileDetailsUpdate';
import ProfilePictureUpdate from '@/components/Profile/Updatephoto';
import ProfileCard from '@/components/ProfileCard/Profilecard';
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from "react"
import { useAuthorization } from "@/components/Services/useAuthorization"


interface ProfiledetailsProps {
  title: string;
  totalTasks: number;
}

const Profiledetails: React.FC<ProfiledetailsProps> = ({ title, totalTasks }) => {
  const router = useRouter(); // This line should be within your functional component

  const { authorizeUser } = useAuthorization({ router });
  const memoizedAuthorizeUser = useCallback(authorizeUser, []);


  useEffect(() => {
    memoizedAuthorizeUser();
  }, [memoizedAuthorizeUser]);
  return (
    <Dashbordc>
      <div className='ml-20 container mt-10 mx-auto px-4 flex'>
        <div className="w-1/2">
          <ProfileDetailsUpdate user={undefined} updateUser={function (uid: number, user: { email: string; dob: string; gender: string; name: string; }): void {
            throw new Error('Function not implemented.');
          }} />
          <div className=' ml-30 mt-10'>
          <ProfileCard userData={undefined} />
          </div>
          
        </div>
        <div className="w-1/2">
          <ProfilePictureUpdate user={""} />
          
        </div>
        
      </div>
    </Dashbordc>
  );
}
export default Profiledetails;
