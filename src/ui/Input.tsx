import { InputHTMLAttributes, useState, useEffect } from "react";
import Icon from "./Icon";
import { IoCloseSharp } from "react-icons/io5";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>(inputValue);

  const clearInput = () => setInputValue("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return (
    <div className="relative w-full">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-lightBlue relative text-dark text-[13px] placeholder:text-dark placeholder:text-[13px] pl-8 pr-4 py-2 font-[400] rounded-xl outline-none w-full"
        {...props}
      />
      {inputValue && (
        <span
          className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[16px] text-dark"
          onClick={clearInput}
        >
          <Icon>
            <IoCloseSharp />
          </Icon>
        </span>
      )}
    </div>
  );
};

export default Input;
