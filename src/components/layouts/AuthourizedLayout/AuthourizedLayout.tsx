import { Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../../store/authSlice";

//css
import Title from "../../common/Header";
import ModuleCss from "./Authourized.module.scss";

interface Props {
  children: React.ReactNode;
}

const AuthourizedLayout = ({ children }: Props) => {
  const userName = useSelector((state) => state.auth.name);
  const dispatch = useDispatch();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Button onClick={()=>dispatch(logout())} >logout</Button>,
    }, 
  ];

  return (
    <div className={ModuleCss.container}>
      <div className={ModuleCss.header}>
        <div className={ModuleCss.leftPanel}>
          <Title className={ModuleCss.headerCustom} />
        </div>
        <div className={ModuleCss.rightPanel}>
          <ul className={ModuleCss.listItems}>
            <Link to="/tasks" ><li>Your Tasks</li></Link>
            <Link to="create-new-task" ><li>Create New Task</li></Link>
            <li>
              <Dropdown menu={{ items }}>
                <Space>
                  <UserOutlined/>
                  {userName}
                </Space>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthourizedLayout;
