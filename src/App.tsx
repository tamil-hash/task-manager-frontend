
//components
import UnAuthRoutes from "./components/routes/UnAuthourized.routes";
import AuthRoutes from "./components/routes/Authourized.routes";

import { useSelector } from "react-redux";


const App = () => {
  const authToken = useSelector((state) => state.auth.token);

  if (authToken=== "") {
    return <UnAuthRoutes />;
  }

  return  <AuthRoutes />;
}

export default App;
