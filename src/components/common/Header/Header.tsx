import { Typography } from "antd";

//css
import ModuleCss from "./Header.module.scss";

const { Title } = Typography;

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <div className={ModuleCss.container}>
      <Title className={className}>Task Manager</Title>
    </div>
  );
};

export default Header;
