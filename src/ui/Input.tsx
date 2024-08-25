import { InputHTMLAttributes, useState, useEffect, forwardRef } from "react";

import Icon from "./Icon";

import { IoCloseSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  noDeleteIcon?: boolean;
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, noDeleteIcon, type = "text", ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [_debouncedValue, setDebouncedValue] = useState<string>(inputValue);
    const [passwordHidden, setPasswordHidden] = useState<boolean>(true);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    }, [inputValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleClearInput = () => {
      setInputValue("");
    };

    const togglePasswordVisibility = () => {
      setPasswordHidden((prev) => !prev);
    };

    const inputType = type === "password" && !passwordHidden ? "text" : type;

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={inputType}
          value={inputValue}
          onChange={handleInputChange}
          className={`relative text-dark placeholder:text-dark pr-4 py-2 font-[400] rounded-xl outline-none w-full ${className}`}
          {...props}
        />
        {inputValue && !noDeleteIcon && (
          <button
            type="button"
            onClick={handleClearInput}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-[16px] text-dark rounded-full leading-[0.7]"
          >
            <Icon>
              <IoCloseSharp />
            </Icon>
          </button>
        )}
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 -translate-y-1/2 leading-[0.7]"
          >
            <Icon className="hover:bg-white">{passwordHidden ? <FaEyeSlash /> : <FaEye />}</Icon>
          </button>
        )}
      </div>
    );
  },
);

export default Input;
