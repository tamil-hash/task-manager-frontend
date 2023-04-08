import { useNavigate } from "react-router-dom"; 
import { Button } from "antd";
import ModuleCss from "./NotFound.module.scss";

const NotFound = () => {
    const navigate = useNavigate();
    const onBackToHomeClick = () => {
        navigate("/");
    }

    return (
      <div className={ModuleCss.container}>
        <h1>404 - Not Found</h1>
        <Button size="large" onClick={onBackToHomeClick}>Back to Home</Button>
      </div>
    );
}

export default NotFound;