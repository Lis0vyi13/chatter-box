import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { toast } from "sonner";

const actionCodeSettings = {
  url: import.meta.env.VITE_APP_URL + "#/" + "login",
  handleCodeInApp: true,
};

export const doSendSignInLink = async (email: string) => {
  await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      toast.info(
        "An activation link has been sent to your email. If you don’t see it, check your spam folder.",
      );
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage);
    });
};
