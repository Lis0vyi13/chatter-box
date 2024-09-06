import { socialSignIn } from "@/firebase/google/socialSignIn";
import { GoogleAuthProvider } from "firebase/auth";

import { ISocialSignInProps } from "@/types/signIn";

export const handleGoogleSignIn = async (props: ISocialSignInProps) => {
  const googleProvider = new GoogleAuthProvider();
  const { navigate } = props;

  await socialSignIn({
    navigate: navigate,
    provider: googleProvider,
  });
};
