import Input from "./Input";
import { CiSearch } from "react-icons/ci";

const SearchInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative">
      <Input {...props} />
      <CiSearch className="absolute text-[18px] left-2 top-[6px]" />
    </div>
  );
};

export default SearchInput;
