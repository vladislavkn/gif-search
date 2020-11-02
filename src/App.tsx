import React, { useState, useEffect } from "react";
import fetchGifs from "./api/fetchGifs";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<Gif>>([]);
  const debouncedSearchValue = useDebounce<string>(searchValue, 1000);

  const uploadGifs = async () => {
    setLoading(true);
    const gifs = await fetchGifs(debouncedSearchValue);
    setData(gifs);
    setLoading(false);
  };

  useEffect(() => {
    uploadGifs();
  }, [debouncedSearchValue]);

  return (
    <>
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <SearchResults data={data} loading={loading} />
    </>
  );
}

export default App;
