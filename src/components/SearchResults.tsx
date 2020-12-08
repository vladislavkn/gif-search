import React, { useMemo } from "react";
import Error from "./Error";
import GifCard from "./GifCard";
import GifCardSkeleton from "./GifCardSkeleton";

type SearchResultsProps = {
  data: Array<Gif>;
  loading: boolean;
  error: string | null;
};

const mockArrayOfGifSkeletons = new Array<null>(6)
  .fill(null)
  .map((_, index) => <GifCardSkeleton key={index} />);

const SearchResults: React.FC<SearchResultsProps> = ({
  data,
  loading,
  error,
}) => {
  const results = useMemo(() => {
    // An error occured, render the error
    if (error) return <Error message={error} />;
    // Still loading, render skeletons
    if (loading) return mockArrayOfGifSkeletons;
    // We have results, render cards
    if (data.length)
      return data.map((gifData) => <GifCard {...gifData} key={gifData.id} />);
    // Nothing was found, render "nothing was found"
    return (
      <h2 className="text-center text-gray-500 text-lg w-full">
        Nothing was found. <br /> Come up with a normal query
      </h2>
    );
  }, [data, loading, error]);

  return <div className="flex flex-wrap p-2">{results}</div>;
};

export default SearchResults;
