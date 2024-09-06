import { ChangeEvent, FormEvent, useState } from "react";
import { signUpWithGoogleAndEmail } from "@/firebase/google/googleEmailAuth";

interface ICreatePasswordForm {
  username: string;
  password: string;
}

const useCreatePasswordForm = () => {
  const [data, setData] = useState<ICreatePasswordForm>({ username: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signUpWithGoogleAndEmail(data);
  };

  return { data, handleChange, handleSubmit };
};

export default useCreatePasswordForm;
