import { ReactNode } from "react";

type IconProps = {
  children: ReactNode;
};

const Icon = ({ children }: IconProps) => {
  return (
    <div className="relative transition-colors hover:bg-dark hover:bg-opacity-20 p-1 rounded-full">
      {children}
    </div>
  );
};

export default Icon;
