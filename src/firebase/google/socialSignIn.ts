import { useNavigate } from "react-router-dom";
import { AuthProvider } from "firebase/auth";
import { toast } from "sonner";

import { doSignInWithPopup } from "./doSignInWithPopup";

interface ISocialSignInProps {
  navigate: ReturnType<typeof useNavigate>;
  provider: AuthProvider;
}

export const socialSignIn = async (props: ISocialSignInProps) => {
  const { navigate, provider } = props;

  try {
    const user = await doSignInWithPopup(provider);

    const hasPasswordProvider = user?.providerData.some((data) => data.providerId === "password");

    if (user && !hasPasswordProvider) {
      localStorage.setItem("googleUserData", JSON.stringify(user));
      navigate("/create-password");
    }
  } catch (error) {
    toast.error("An error occurred during sign-in. Please try again.");
  }
};
