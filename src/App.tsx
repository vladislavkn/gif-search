import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  return (
    <>
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <SearchResults data={[]} loading={false} />
      {debouncedSearchValue}
    </>
  );
}

export default App;
