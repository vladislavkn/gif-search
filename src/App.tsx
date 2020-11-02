import React, { useState, useEffect } from "react";
import fetchGifs from "./api/fetchGifs";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce<string>(searchValue, 500);

  const uploadGifs = async () => {
    const gifs = await fetchGifs("test");
    console.log(gifs);
  };

  useEffect(() => {
    uploadGifs();
  }, []);

  return (
    <>
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <SearchResults data={[]} loading={false} />
      {debouncedSearchValue}
    </>
  );
}

export default App;
