import { Tabs, message } from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../utils/axios";
import { useSelector } from "react-redux";

const AllTasks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const token: string = useSelector((state) => state.auth.token);

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Todo`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Inprogress`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Completed`,
      children: `Content of Tab Pane 3`,
    },
  ];

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const data = await axiosInstance.get("/tasks/fetch", {
        headers: { token },
      });
    } catch (error) {
      console.log(error);
      message.error("Something went wrong.Please Try again");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default AllTasks;
