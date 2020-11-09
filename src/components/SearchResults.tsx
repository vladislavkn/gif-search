import React, { useMemo } from "react";
import GifCard from "./GifCard";
import GifCardSkeleton from "./GifCardSkeleton";

type SearchResultsProps = {
  data: Array<Gif>;
  loading: boolean;
  error: string | null;
};

type RenderResult = React.ReactElement | Array<React.ReactElement>;

const mockArray = new Array<null>(6).fill(null);

const SearchResults: React.FC<SearchResultsProps> = ({
  data,
  loading,
  error,
}) => {
  const results = useMemo<RenderResult>(() => {
    // An error occured
    if (error)
      return (
        <>
          <h2 className="text-center text-gray-500 text-lg w-full">Error:</h2>
          <pre className="p-2 bg-blue-900 rounded text-gray-200 text-sm mx-auto my-2">
            {error}
          </pre>
          <br />
          <h2 className="text-center text-gray-500 text-lg w-full">
            Do you know how to fix that?
          </h2>
        </>
      );

    if (!loading) {
      if (data.length) {
        // We have results
        return data.map((gifData) => <GifCard {...gifData} key={gifData.id} />);
      } else {
        // Nothing was found
        return (
          <h2 className="text-center text-gray-500 text-lg w-full">
            Nothing was found. <br /> Come up with a normal query
          </h2>
        );
      }
    } else {
      // Request hasn't loaded yet
      return mockArray.map((_, index) => <GifCardSkeleton key={index} />);
    }
  }, [data, loading, error]);

  return <div className="flex flex-wrap p-2">{results}</div>;
};

export default SearchResults;
