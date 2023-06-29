import React from "react";
import { useAppSelector } from "../../constant/redux/hooks";
import { Navigate } from "react-router-dom";

type IrequiredAuth = {
  children: React.ReactNode;
};

const RequiredAuth = ({ children }: IrequiredAuth) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  if (!isLoggedIn) return <Navigate to="/auth/login" />;
  return isLoggedIn ? children : <Navigate to="/authlogin" />;
};

export default RequiredAuth;
