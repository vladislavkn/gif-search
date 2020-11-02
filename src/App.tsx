import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <SearchResults data={[]} loading={false} />
    </>
  );
}

export default App;
