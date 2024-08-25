import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { toast } from "sonner";

const provider = new GoogleAuthProvider();

export const doSignInWithPopup = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    } else {
      console.log(error);
    }
    return null;
  }
};
