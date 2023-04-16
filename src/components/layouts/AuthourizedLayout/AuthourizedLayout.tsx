import { Button, Dropdown, Space, message } from "antd";
import { NavLink } from "react-router-dom";
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

  const onLogout = () => {
    dispatch(logout());
    message.success("Logged out Successfully.");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Button onClick={onLogout}>logout</Button>,
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
            <li>
              <NavLink
                to="/tasks"
                className={({isActive}) =>
                  isActive
                    ? [ModuleCss.navLink, ModuleCss.active].join(" ")
                    : ModuleCss.navLink
                }
              >
                Your Tasks
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/create-new-task"
                className={({isActive}) =>
                  isActive
                    ? [ModuleCss.navLink, ModuleCss.active].join(" ")
                    : ModuleCss.navLink
                }
              >
                Create New Task
              </NavLink>
            </li>

            <li>
              <Dropdown menu={{ items }}>
                <Space>
                  <UserOutlined />
                  {userName}
                </Space>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
      <div className={ModuleCss.body}>{children}</div>
    </div>
  );
};

export default AuthourizedLayout;
