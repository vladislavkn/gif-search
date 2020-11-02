import React, { useMemo } from "react";
import GifCard from "./GifCard";
import GifCardSkeleton from "./GifCardSkeleton";

interface ISearchResultsProps {
  data: Array<{
    src: string;
    title: string;
    id: string;
  }>;
  loading: boolean;
}

const mockArray = new Array<null>(6).fill(null);
type Results = React.ReactElement | Array<React.ReactElement>;

const SearchResults: React.FC<ISearchResultsProps> = ({ data, loading }) => {
  const results = useMemo<Results>(() => {
    if (!loading) {
      if (data.length) {
        // We have results
        return data.map(({ src, title, id }) => (
          <GifCard src={src} title={title} key={id} />
        ));
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
  }, [data, loading]);

  return <div className="flex flex-wrap p-2">{results}</div>;
};

export default SearchResults;
