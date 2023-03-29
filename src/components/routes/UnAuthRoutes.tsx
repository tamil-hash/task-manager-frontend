import { Routes, Route, Navigate } from "react-router-dom";

//components
import Login from "../pages/unauthourized/Login";
import Signup from "../pages/unauthourized/Signup";

const UnAuthRoutes = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Signup />} />
        <Route path="*" element={<Navigate to="login" replace />} />
     </Routes>
};

export default UnAuthRoutes;