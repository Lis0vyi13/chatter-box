import { useRef } from "react";

import useCreatePasswordForm from "./useCreatePasswordForm";

import Button from "@/ui/Button";
import Input from "@/ui/Input";

import { FaArrowRightLong } from "react-icons/fa6";

const CreatePasswordForm = () => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const { data, handleChange, handleSubmit } = useCreatePasswordForm();
  const inputClassName =
    "bg-dark pl-3 py-3 text-white text-[12px] placeholder:text-[12px] placeholder:text-white placeholder:text-opacity-30 outline outline-gray/45 focus:outline-white/55";

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (submitButtonRef.current) {
            submitButtonRef.current.focus();
          }
        }
      }}
      className="mt-4 w-full xs:w-[270px] flex flex-col gap-3 max-w-full"
    >
      <Input
        name="username"
        placeholder="Username"
        required
        value={data.username}
        onChange={handleChange}
        className={`${inputClassName} ${data.username ? "outline-white/55" : ""}`}
        autoComplete="name"
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        minLength={6}
        required
        value={data.password}
        onChange={handleChange}
        className={`${inputClassName} ${data.password ? "outline-white/55" : ""}`}
        autoComplete="new-password"
      />
      <Button
        ref={submitButtonRef}
        className="text-dark flex justify-center hover:bg-gray text-[12px] py-3 items-center gap-1 mt-6 bg-white rounded-2xl"
      >
        <span>Log In</span> <FaArrowRightLong className="mt-[2px]" />
      </Button>
    </form>
  );
};

export default CreatePasswordForm;
