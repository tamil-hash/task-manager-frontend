import { Tabs, message } from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import TasksTab from "./TasksTab";
import { setTasks } from "../../../../store/taskSlice";

const AllTasks = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const token: string = useSelector((state: any) => state.auth.token);
  const todoList = useSelector((state: any) => state.task.todoList);
  const inprogressList = useSelector((state: any) => state.task.inprogressList);
  const completedList = useSelector((state: any) => state.task.completedList);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Todo`,
      children: <TasksTab isLoading={isLoading} taskType="Todo" tasks={todoList} />,
    },
    {
      key: "2",
      label: `Inprogress`,
      children: <TasksTab taskType="In Progress" tasks={inprogressList} />,
    },
    {
      key: "3",
      label: `Completed`,
      children: <TasksTab taskType="Completed" tasks={completedList} />,
    },
  ];

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/tasks/fetch", {
        headers: { token },
      });

      dispatch(setTasks(response.data));
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

  

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default AllTasks;
