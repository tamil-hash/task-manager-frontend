import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Loader from "../common/Loader/Loader";
import AuthourizedLayout from "../layouts/AuthourizedLayout";
const AllTasks = lazy(() => import("../pages/Authourized/AllTasks"));
const CreateNewTask = lazy(() => import("../pages/Authourized/CreateTask"));

const AuthRoutes = () => {
  return (
    <AuthourizedLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/tasks" element={<AllTasks />} />
          <Route path="/create-new-task" element={<CreateNewTask />} />
          <Route path="/edit-task" element={<CreateNewTask />} />
          <Route path="*" element={<Navigate to="/tasks" />} />
        </Routes>
      </Suspense>
    </AuthourizedLayout>
  );
};

export default AuthRoutes;
