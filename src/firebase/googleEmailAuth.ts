import { linkWithCredential, EmailAuthProvider, updateProfile } from "firebase/auth";
import { doSignInWithPopup } from "@/firebase/googleAuth";
import { toast } from "sonner";

export const signUpWithGoogleAndEmail = async (
  email: string,
  password: string,
  username: string,
) => {
  try {
    const user = await doSignInWithPopup();

    if (user) {
      const credential = EmailAuthProvider.credential(email, password);

      try {
        const userCredential = await linkWithCredential(user, credential);
        const linkedUser = userCredential.user;

        await updateProfile(linkedUser, { displayName: username });

        toast.success("Account linked and signed in successfully!");
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === "auth/email-already-in-use") {
            toast.error("This email is already in use with another account.");
          } else {
            toast.error("Failed to link account.");
            console.error(error);
          }
        }
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      console.error(error);
    }
  }
};
