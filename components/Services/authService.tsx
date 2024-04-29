import axios from "axios";
export const login = async (loginForm: LoginFormState): Promise<void> => {
  try {
    const response = await axios.post(
      "https://test.api.alphanetverse.com/api/v1/auth/jwt/",
      loginForm
    );
    if (response.status === 200) {
      const access = response.data.access;
      localStorage.setItem("token", access);
    } else {
      console.error("Signin failed.");
    }
  } catch (error) {
    console.error("Signin failed. An error occurred.", error);
    // Notiflix.Notify.failure("Vérifiez votre e-mail ou mot de passe", {
    //   position: "center-top",
    // });
  }
};

export const getCurrentUser = async (): Promise<any[]> => {
  try {
    const response = await axios.get("https://test.api.alphanetverse.com/api/v1/me/", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Current User:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Current User:", error);
    throw new Error("Failed to fetch Current User.");
  }
};






type LoginFormState = {
  email: string;
  password: string;
};




export const logout = (): void => {
  localStorage.removeItem("token");
  // Perform any other necessary logout actions, such as resetting component state or redirecting the user
};


export const getUserWallet = async (): Promise<any[]> => {
  try {
    const response = await axios.get("https://test.api.alphanetverse.com/api/v1/me/wallet/", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("User Wallet:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching User Wallet:", error);
    throw new Error("Failed to fetch User Wallet.");
  }
};