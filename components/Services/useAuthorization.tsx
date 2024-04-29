// import {  } from "next/navigation"; // Import NextRouter type if necessary

type UseAuthorizationProps = {
  router: any; // Pass NextRouter as a prop
};
import { jwtDecode } from "jwt-decode";

export const useAuthorization = ({ router }: UseAuthorizationProps) => {

  const authorizeUser = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        // const { role } = decodedToken;
        // if (role === 1) {
        router.push("/dashbord");
        // } else {
        //   router.push("/auth/signin");
        // }
      } catch (error) {
        console.error("Invalid token:", error);
        router.push("/auth/signin");
      }
    } else {
      router.push("/auth/signin");
    }
  };

  return { authorizeUser };
};

// export default useAuthorization;
