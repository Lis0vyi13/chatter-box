import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  className?: string;
}

const Icon = ({ children, className }: IconProps) => {
  return (
    <div
      className={`relative inline-block cursor-pointer transition-colors hover:bg-dark hover:bg-opacity-20 p-1 rounded-full ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Icon;
