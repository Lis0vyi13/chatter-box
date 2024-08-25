import { ReactNode } from "react";

interface IBlockProps {
  color?: "white" | "lightBlue" | "dark";
  children: ReactNode;
  className?: string;
}

const Block = ({ color = "white", className, children }: IBlockProps) => {
  const colorClass = `bg-${color}`;

  return (
    <section
      className={`block w-full h-full overflow-hidden rounded-[24px] p-4 ${colorClass} ${className}`}
    >
      {children}
    </section>
  );
};

export default Block;
