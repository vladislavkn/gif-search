import React, { useState } from "react";
import SearchInput from "./components/SearchInput";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <>
      <SearchInput value={searchValue} onChange={setSearchValue} />
    </>
  );
}

export default App;
