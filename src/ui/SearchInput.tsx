import Input from "./Input";
import { CiSearch } from "react-icons/ci";

interface ISearchInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url";
}
const SearchInput = ({ type, ...props }: ISearchInput) => {
  return (
    <div className="relative">
      <Input
        className="pl-[30px] placeholder:text-[12px] text-[12px] bg-lightBlue"
        type={type}
        {...props}
      />
      <CiSearch className="absolute text-[18px] left-2 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default SearchInput;
