import React, { useState, useEffect } from "react";
import fetchGifs from "./api/fetchGifs";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import { Heart } from "react-feather";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<Gif>>([]);
  const debouncedSearchValue = useDebounce<string>(searchValue, 1000);

  const uploadGifs = async () => {
    setLoading(true);
    setError(null);
    let gifs: Array<Gif> = [];

    try {
      gifs = await fetchGifs(debouncedSearchValue);
    } catch (e) {
      setError(e.message);
    } finally {
      setData(gifs);
      setLoading(false);
    }
  };

  useEffect(() => {
    uploadGifs();
  }, [debouncedSearchValue]);

  return (
    <>
      <header className="pt-4 pb-2 px-2">
        <h1 className="text-center text-lg text-gray-500">Search for GIFs</h1>
      </header>
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <SearchResults data={data} loading={loading} error={error} />
      <footer className="pt-2 pb-4 px-2 text-center">
        <span className="pt-2 px-2 text-gray-500 text-sm border-gray-300 border-t">
          Powered by{" "}
          <a href="https://giphy.com/" className="text-blue-500">
            Giphy
          </a>{" "}
          | Created by{" "}
          <a href="https://github.com/vladislavkn" className="text-blue-500">
            @vladislavkn
          </a>
        </span>
      </footer>
    </>
  );
}

export default App;
