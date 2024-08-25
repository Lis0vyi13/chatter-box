import { doSignInWithPopup } from "@/firebase/googleAuth";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const signInWithGoogle = async (
  setUser: ActionCreatorWithPayload<object, "user/setUser">,
) => {
  const user = await doSignInWithPopup();
  if (user) {
    setUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      isVerified: user.emailVerified,
    });
    toast.success("You have successfully signed in!");
  } else {
    toast.error("Sign-in failed.");
  }
};
