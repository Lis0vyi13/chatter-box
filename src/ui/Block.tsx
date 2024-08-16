import { ReactNode } from "react";

interface IBlockProps {
  color?: "white" | "lightBlue";
  children: ReactNode;
  className?: string;
}

const Block = ({ color = "white", className, children }: IBlockProps) => {
  return (
    <section
      className={`block w-full h-full rounded-[24px] p-4 ${
        color == "white" ? "bg-white" : "bg-lightBlue"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Block;
