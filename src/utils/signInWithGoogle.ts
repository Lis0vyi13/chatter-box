import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { doSignInWithPopup } from "@/firebase/googleAuth";
import { toast } from "sonner";

import { IUser } from "@/types/user";

export const signInWithGoogle = async (
  setUser: ActionCreatorWithPayload<IUser, "user/setUser">,
) => {
  const user = await doSignInWithPopup();
  if (user) {
    setUser({
      uid: user.uid,
      email: user.email as string,
      displayName: user.displayName as string,
      photoURL: user.photoURL as string,
      emailVerified: user.emailVerified,
    });
    toast.success("You have successfully signed in!");
  } else {
    toast.error("Sign-in failed.");
  }
};
