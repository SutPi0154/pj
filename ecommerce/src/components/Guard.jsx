import Cookies from "js-cookie";
import React from "react";
import Register from "../pages/Register";

const Guard = ({ children }) => {
  const token = JSON.stringify(Cookies.get("token"));
  if (token) {
    return children;
  } else {
    return <Register />;
  }
};

export default Guard;
