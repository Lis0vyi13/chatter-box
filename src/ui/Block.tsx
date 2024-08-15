import { ReactNode } from "react";

interface IBlockProps {
  color?: "white" | "lightBlue";
  children: ReactNode;
}

const Block = ({ color = "white", children }: IBlockProps) => {
  return (
    <section
      className={`block w-full h-full rounded-[24px] p-4 ${
        color == "white" ? "bg-white" : "bg-lightBlue"
      }`}
    >
      {children}
    </section>
  );
};

export default Block;
