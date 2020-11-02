import React from "react";

const GifCardSkeleton: React.FC<{}> = () => (
  <article className="p-2 xl:w-1/6 lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2">
    <div className="bg-gray-300 rounded-lg p-2">
      <div className="rounded bg-gray-500 h-32" />
      <div className="pt-2">
        <div className="rounded h-4 w-24 bg-gray-500"></div>
      </div>
    </div>
  </article>
);

export default GifCardSkeleton;
