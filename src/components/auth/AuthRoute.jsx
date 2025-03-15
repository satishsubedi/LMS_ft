import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.userInfo);
  const isAuth = user?._id;
  return isAuth ? (
    children
  ) : (
    <Navigate state={{ from: location.pathname }} to="/login" />
  );
};
