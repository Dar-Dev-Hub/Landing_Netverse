import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is logged in (example using JWT token)
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      // Token exists, check if it's valid (you might need to decode and verify the token)
      const decodedToken = decodeToken(token); // Example function to decode token
      if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
        // Token is valid
        setLoggedIn(true);
      } else {
        // Token is expired or invalid
        setLoggedIn(false);
        // Optionally, you might want to clear the invalid token from storage
        localStorage.removeItem('token');
      }
    } else {
      // Token doesn't exist
      setLoggedIn(false);
    }
  }, []);

  return { loggedIn };
};

// Example function to decode JWT token (you might need to use a JWT library)
const decodeToken = (token: string): any => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return null;
  }
};
