//components
import UnAuthRoutes from "./components/routes/UnAuthourized.routes";
import AuthRoutes from "./components/routes/Authourized.routes";

const App = () => {
  return (
    <>
      <UnAuthRoutes />
      {/* <AuthRoutes /> */}
    </>
  );
}

export default App;
