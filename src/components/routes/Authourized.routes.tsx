import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

//components
const Login = lazy(()=>import("../pages/UnAuthourized/Login")); 

const AuthRoutes = () => {
  return (
    <Routes>
      <Route />
    </Routes>
  );
};

export default AuthRoutes;
