import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  let { pathname } = useLocation();

  return (
    <>
      <h3>
        No match for: <u>{pathname}</u>
      </h3>
    </>
  );
};

export default NotFound;
