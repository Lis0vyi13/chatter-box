import Input, { InputProps } from "./Input";
import { CiSearch } from "react-icons/ci";

const SearchInput = (props: InputProps) => {
  return (
    <div className="relative">
      <Input {...props} className="pl-[30px] placeholder:text-[12px] text-[12px] bg-lightBlue" />
      <CiSearch className="absolute text-[18px] left-2 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default SearchInput;
