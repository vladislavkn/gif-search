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
}) => (
  <div className="flex flex-wrap p-2">
    {error ? ( // An error occured
      <Error message={error} />
    ) : loading ? ( // Still loading
      mockArrayOfGifSkeletons
    ) : data.length ? ( // Results are recived
      data.map((gifData) => <GifCard {...gifData} key={gifData.id} />)
    ) : (
      // Results are recived, but nothing was found
      <h2 className="text-center text-gray-500 text-lg w-full">
        Nothing was found. <br /> Come up with a normal query
      </h2>
    )}
  </div>
);

export default SearchResults;
