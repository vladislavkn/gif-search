import React from "react";

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => (
  <>
    <h2 className="text-center text-gray-500 text-lg w-full">Error:</h2>
    <pre className="p-2 bg-blue-900 rounded text-gray-200 text-sm mx-auto my-2">
      {message}
    </pre>
    <br />
    <h2 className="text-center text-gray-500 text-lg w-full">
      Do you know how to fix that?
    </h2>
  </>
);

export default Error;
