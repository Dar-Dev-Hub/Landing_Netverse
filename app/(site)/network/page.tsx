"use client";
import Dashbordc from '@/components/Dashbord/dashboard';
import NetworkC from '@/components/Network/Network';
import React from 'react';
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from "react"
import { useAuthorization } from "@/components/Services/useAuthorization"

const Network: React.FC = () => {

    const router = useRouter(); // This line should be within your functional component

    const { authorizeUser } = useAuthorization({ router });
    const memoizedAuthorizeUser = useCallback(authorizeUser, []);
  
  
    useEffect(() => {
      memoizedAuthorizeUser();
    }, [memoizedAuthorizeUser]);


  return (
    <Dashbordc>
      <div className='ml-10 container  mx-auto px-4'>
        <NetworkC/>
      </div>
    </Dashbordc>
  );
}

export default Network;
