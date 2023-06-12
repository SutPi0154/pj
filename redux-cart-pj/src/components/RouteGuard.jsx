import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const location = useLocation();
  console.log(location);
  if (location?.state != null && location.state != "") {
    return children;
  } else {
    return <Navigate to={"/"} />; 
  }
};

export default RouteGuard;
