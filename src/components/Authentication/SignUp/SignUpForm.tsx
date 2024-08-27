import { useRef } from "react";
import { Link } from "react-router-dom";

import Input from "@/ui/Input";
import Button from "@/ui/Button";
import AuthLoader from "../AuthLoader";

import { FaArrowRightLong } from "react-icons/fa6";
import useSignUpForm from "./useSignUpForm";

const SignUpForm = () => {
  const { data, isSubmitted, progressValue, handleChange, handleSubmit } = useSignUpForm();
  const submitButtonRef = useRef<HTMLButtonElement>(null);

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
        name="email"
        type="email"
        placeholder="Email"
        required
        value={data.email}
        onChange={handleChange}
        className={`${inputClassName} ${data.email ? "outline-white/55" : ""}`}
        autoComplete="email"
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        required
        minLength={6}
        value={data.password}
        onChange={handleChange}
        className={`${inputClassName} ${data.password ? "outline-white/55" : ""}`}
        autoComplete="new-password"
      />
      <Button
        ref={submitButtonRef}
        className="text-dark flex justify-center hover:bg-gray text-[12px] py-3 items-center gap-1 mt-6 bg-white rounded-2xl"
      >
        <span>Sign Up</span> <FaArrowRightLong className="mt-[2px]" />
      </Button>

      <div className="flex gap-1 items-center justify-center text-[12px]">
        <span>Already have an account?</span>
        <Link to={"/login"}>
          <Button className="border text-[12px] bg-dark hover:bg-[#464646] w-fit px-[10px] py-[2px] rounded-2xl border-gray">
            Log In
          </Button>
        </Link>
      </div>
      {isSubmitted && <AuthLoader value={progressValue} />}
    </form>
  );
};

export default SignUpForm;
