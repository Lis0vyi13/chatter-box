import doCreateUserWithEmailAndPassword from "@/firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";

interface ISignUpForm {
  username: string;
  email: string;
  password: string;
}

const useSignUpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [data, setData] = useState<ISignUpForm>({
    username: "",
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
      setIsSubmitted(true);
      await doCreateUserWithEmailAndPassword(
        data.email,
        data.password,
        data.username,
        setProgressValue,
        setIsSubmitted,
      );
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setTimeout(() => {
        setIsSubmitted(false);
        setProgressValue(0);
      }, 600);
    }
  };

  return { data, isSubmitted, progressValue, handleChange, handleSubmit };
};

export default useSignUpForm;
