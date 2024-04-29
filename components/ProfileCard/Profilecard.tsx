import React, { useEffect } from 'react';
import QRCode from 'qrcode';
import { getCurrentUser } from '../Services/authService';

interface ProfileCardProps {
  userData: any; // replace with the actual type of the user data
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userData: profileData }) => {
  const [qrCodeUrl, setQrCodeUrl] = React.useState<string | null>(null);

  const [userData, setUserData] = React.useState<any | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getCurrentUser();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData && userData.referral_code) {
      QRCode.toDataURL(userData.referral_code, { width: 200 }, (err, url) => {
        if (err) return console.error(err);
        setQrCodeUrl(url);
      });
    }
  }, [userData]);

  useEffect(() => {
    if (userData && userData.data_joined) {
      const joinedDate = new Date(userData.data_joined);
      const formattedDate = `${joinedDate.getMonth() + 1}/${joinedDate.getDate()}/${joinedDate.getFullYear()}`;
      const endDate = new Date(joinedDate);
      endDate.setFullYear(joinedDate.getFullYear() + 1);
      const formattedEndDate = `${endDate.getMonth() + 1}/${endDate.getDate()}/${endDate.getFullYear()}`;
      setUserData({ ...userData, formattedDataJoined: formattedDate, formattedEndDate });
    }
  }, [userData]);

  return (
    <div
      className="flex md:max-w-sm flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row"
    >
      <div className="ml-0">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="Your Refuel Code" />
        ) : (
          <div>Loading QR code...</div>
        )}
      </div>
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50"
        >
          Your Refuel Code
        </h5>
        <p className=" text-base text-neutral-600 dark:text-neutral-200">
          {userData?.first_name} {userData?.last_name}
        </p>
        <p className=" text-base text-neutral-600 dark:text-neutral-200">
          {userData?.username}
        </p>
        <p className='text-blue-500 mt-3 text-sm font-medium'>
        {userData?.subscription_type}
        </p>
        <p className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {userData && userData.referral_code}
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Joined on: <span className='text-green-500'>{userData?.formattedDataJoined}</span> - Ends on: <span className='text-red-500'>{userData?.formattedEndDate}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;