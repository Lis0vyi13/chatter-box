import { ReactNode } from "react";

interface ICounterProps {
  children: ReactNode;
}

const Counter = ({ children }: ICounterProps) => {
  return (
    <div className="w-5 h-5 text-white bg-orange rounded-full flex justify-center items-center">
      <span className="inline-block text-[12px]">{children}</span>
    </div>
  );
};

export default Counter;
