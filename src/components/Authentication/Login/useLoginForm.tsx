import { ChangeEvent, FormEvent, useState } from "react";
import { doSignInWithEmailAndPassword } from "@/firebase/signIn";
import { toast } from "sonner";

interface ILoginForm {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [data, setData] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await doSignInWithEmailAndPassword(data.email, data.password);
      if (user) {
        if (user.emailVerified) {
          toast.success("You have successfully signed in!");
        } else {
          toast.error("Account verification is required before you can continue.");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred during sign-in.");
    }
  };
  return { data, handleChange, handleSubmit };
};

export default useLoginForm;
