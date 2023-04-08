import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Loader from "../common/Loader/Loader";

const Login = lazy(() => import("../pages/UnAuthourized/Login"));
const Signup = lazy(() => import("../pages/UnAuthourized/Signup"));
const NotFound = lazy(() => import("../pages/UnAuthourized/NotFound"));

const UnAuthRoutes = () => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default UnAuthRoutes;
