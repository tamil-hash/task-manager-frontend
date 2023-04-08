import { Typography } from "antd";

//css
import ModuleCss from "./Header.module.scss"

const { Title } = Typography;

const Header = () => {
    return (
      <div className={ModuleCss.container}>
        <Title>Task Manager</Title>
      </div>
    );
}

export default Header;