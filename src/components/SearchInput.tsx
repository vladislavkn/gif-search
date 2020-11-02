import React from "react";
import { Search } from "react-feather";

interface ISearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ value, onChange }) => (
  <div className="p-2 flex justify-center">
    <div className="bg-gray-300 rounded-lg max-w-xs py-1 px-2 flex flex-grow items-center">
      <Search size={16} strokeWidth={3} className="text-gray-600 mr-2" />
      <input
        className="flex flex-grow bg-transparent text-gray-600 outline-none"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

export default SearchInput;
