import React from "react";

interface IGifCardProps {
  src: string;
  title: string;
}

const GifCard: React.FC<IGifCardProps> = ({ src, title }) => (
  <article className="p-2 xl:w-1/6 lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2">
    <div className="bg-gray-300 rounded-lg p-2 flex flex-col h-full">
      <div
        className="rounded w-full xl:h-56 lg:h-48 h-32 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="pt-2 flex flex-col flex-grow justify-center text-lg text-center text-gray-600">
        {title}
      </div>
    </div>
  </article>
);

export default GifCard;
