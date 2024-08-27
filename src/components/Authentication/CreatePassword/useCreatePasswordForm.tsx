import { ChangeEvent, FormEvent, useState } from "react";
import { auth } from "@/firebase/firebaseConfig";
import { linkWithCredential, updateProfile, User } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { toast } from "sonner";

import useActions from "@/hooks/useActions";

interface ICreatePasswordForm {
  username: string;
  password: string;
}

const useCreatePasswordForm = () => {
  const [data, setData] = useState<ICreatePasswordForm>({ username: "", password: "" });
  const { setUser } = useActions();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem("googleUserData");
    const userData = storedUserData ? JSON.parse(storedUserData) : null;

    if (userData && userData.email) {
      try {
        const credential = EmailAuthProvider.credential(userData.email, data.password);
        const userCredential = await linkWithCredential(auth.currentUser as User, credential);
        console.log(userCredential);
        const linkedUser = userCredential.user;

        await updateProfile(linkedUser, { displayName: data.username });

        setUser({
          uid: linkedUser.uid,
          email: linkedUser.email,
          displayName: data.username,
          photoURL: linkedUser.photoURL,
          emailVerified: true,
        });

        localStorage.removeItem("googleUserData");

        toast.success("Account linked and signed in successfully!");
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === "auth/email-already-in-use") {
            toast.error("This email is already in use with another account.");
          } else {
            toast.error(error.message);
            console.error(error);
          }
        }
      }
    } else {
      toast.error("Please sign up using Google or Facebook first.");
    }
  };
  return { data, handleChange, handleSubmit };
};

export default useCreatePasswordForm;
