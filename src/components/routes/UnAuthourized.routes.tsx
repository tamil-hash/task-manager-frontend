import { lazy } from "react";
import { Routes,Route } from "react-router-dom";

//components
const Login = lazy(()=>import("../pages/UnAuthourized/Login"));

const UnAuthRoutes = ()=>{
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
};

export default UnAuthRoutes;