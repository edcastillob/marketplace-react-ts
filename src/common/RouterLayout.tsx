import React from "react";
import { Navbar } from "./Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export const RouterLayout: React.FC<{}> = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return isAuth ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
