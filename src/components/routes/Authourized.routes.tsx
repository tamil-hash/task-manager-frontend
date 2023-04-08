import { lazy,Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Loader from "../common/Loader/Loader";

const AllTasks = lazy(()=>import("../pages/Authourized/AllTasks"));
const NotFound = lazy(() => import("../pages/UnAuthourized/NotFound"));

const AuthRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<AllTasks />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AuthRoutes;
