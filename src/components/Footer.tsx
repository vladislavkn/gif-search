import React from "react";

const Footer: React.FC<{}> = () => (
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
);

export default Footer;
