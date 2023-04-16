import { useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import { setUserDetails } from "./store/authSlice";

//components
import UnAuthRoutes from "./components/routes/UnAuthourized.routes";
import AuthRoutes from "./components/routes/Authourized.routes";
import Loader from "./components/common/Loader/Loader";
import axiosInstance from "./utils/axios";

const App = () => {
  const [loading, setLoading] = useState(false);
  const authToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getRefreshToken = async () => {
    try {
      setLoading(true);
      const refreshToken = localStorage.getItem("refreshToken");
      if(refreshToken){
        const data = await axiosInstance.post("/refresh",{refreshToken});
        dispatch(setUserDetails(data.data));
        localStorage.setItem("refreshToken",data.data.refreshToken);
        message.success("Logged In successfully.");
    }
  } catch (error) {
      if(error.response.status===406){
        message.error("Session expired.Please login again")
      }
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRefreshToken();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (authToken === "") {
    return <UnAuthRoutes />;
  }

  return <AuthRoutes />;
};

export default App;
