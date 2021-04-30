import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h4 className="mt-5 text-center text-danger">
        The page you are looking for is not found.
      </h4>
      <h1>
        <a href="/home/">Go Home</a>
      </h1>
    </div>
  );
};

export default NotFound;
