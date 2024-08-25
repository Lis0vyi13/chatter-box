import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { toast } from "sonner";
import { doSendSignInLink } from "./sendSignInLink";

const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName: string,
  setProgressValue: React.Dispatch<React.SetStateAction<number>>,
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);

    await updateProfile(user, { displayName });

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        setProgressValue(33);
        resolve();
      }, 400),
    );

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        setProgressValue(66);
        resolve();
      }, 800),
    );

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        setProgressValue(90);
        resolve();
      }, 1200),
    );

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        setProgressValue(100);
        resolve();
      }, 1400),
    );

    await doSendSignInLink(email);
  } catch (error) {
    setIsSubmitted(false);
    setProgressValue(0);

    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("An unexpected error occurred. Please try again.");
    }
  }
};

export default doCreateUserWithEmailAndPassword;
