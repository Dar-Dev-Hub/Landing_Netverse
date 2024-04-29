import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../Services/authService';

const ProfileDetailsUpdate = ({ user, updateUser }: { user: any; updateUser: (uid: number, user: { email: string;  gender: string; name: string }) => void }) => {
  const [userData, setUserData] = useState<any | null>(null);
  const [state, setState] = useState({
    name: '',
    email: '',
    gender: 'male',

  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(user.uid, {
      email: state.email,
      gender: state.gender,
      name: state.name
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto">
      <div className="w-full max-w-xs mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nameInput" className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            {userData?.first_name}
            <input
              id="nameInput"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={state.name}
              name="name"
              onChange={handleChange}
              defaultValue={userData?.email}
            />
           
          </div>
          
          <div className="mb-4">
            <label htmlFor="genderInput" className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <select
              id="genderInput"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={state.gender}
              name="gender"
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="decline">Decline to self-identify</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="emailInput" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            {userData?.email}
            <input
              id="emailInput"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={state.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetailsUpdate;
