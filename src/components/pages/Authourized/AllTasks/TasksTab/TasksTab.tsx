import Countdown from "react-countdown";
import dayjs from "dayjs";
import { Button, Card, Progress, message } from "antd";
import Loader from "../../../../common/Loader";
import NoTask from "../../../../common/NoTask";
import { useDispatch, useSelector } from "react-redux";
//css
import ModuleCss from "./TasksTab.module.scss";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import axiosInstance from "../../../../../utils/axios";
import {
  setProgress,
  setSelectedTask,
  setTasks,
} from "../../../../../store/taskSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  tasks: Array<Object>;
  taskType: String;
  isLoading?: Boolean;
}

const TasksTab = ({ tasks, taskType, isLoading }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token: string = useSelector((state: any) => state.auth.token);
  if (isLoading) {
    return <Loader />;
  }

  if (tasks.length === 0) {
    return <NoTask taskType={taskType} />;
  }

  const increase = (id: string, prevPercent: number) => {
    const newPercent = prevPercent + 10;
    updateProgress(id, newPercent);
    if (newPercent >= 100) {
      makeProgress(id, "completed");
    }
    dispatch(setProgress({ id, newPercent }));
  };

  const deleteTask = async (id: string) => {
    try {
      message.loading("Please wait...");
      await axiosInstance.delete(`/tasks/delete/${id}`, {
        headers: { token },
      });
      await fetchTasks();
      message.success("Task Deleted Successfully.");
    } catch (error) {
      message.error("something went wrong. Please try again.");
    }
  };

  const editTask = async (task: any) => {
    dispatch(setSelectedTask(task));
    navigate("/edit-task");
  };

  const makeProgress = async (id: string, status: string) => {
    try {
      message.loading("Please wait...");
      await axiosInstance.post(
        `/tasks/update/${id}`,
        { status },
        {
          headers: { token },
        }
      );
      await fetchTasks();
      message.success(`Task moved to ${status}.`);
    } catch (error) {
      message.error("something went wrong. Please try again.");
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get("/tasks/fetch", {
        headers: { token },
      });

      dispatch(setTasks(response.data));
    } catch (error) {
      console.log(error);
      message.error("Something went wrong.Please Try again");
    }
  };

  const updateProgress = async (id: string, percent: number) => {
    try {
      const response = await axiosInstance.post(
        `/tasks/updateProgress/${id}`,
        { progress: percent },
        {
          headers: { token },
        }
      );
    } catch (error) {
      console.log(error);
      message.error("Something went wrong.Please Try again");
    }
  };

  const getMillisecond = (time: string) => {
    const totalTime = time.split(" ")[0];
    const format = time.split(" ")[1];
    let gg = 0;
    if (format === "hours") {
      gg = +totalTime * 3600000;
    }
    if (format === "days") {
      gg = +totalTime * 86400000;
    }
    if (format === "months") {
      gg = +totalTime * 86400000 * 30;
    }

    return gg;
  };

  const renderer = ({ hours, minutes, seconds, completed }:any) => {
    if (completed) {
      // Render a completed state
      return <b style={{color:"red"}} >Time Over</b>;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <div className={ModuleCss.container}>
      {tasks.map((task: any) => {
        const extra =
          task.status === "inprogress"
            ? {
                extra: (
                  <p>
                    <b>Time Left:</b>{" "}
                    <Countdown
                      date={
                        Date.parse(task.startTime) + getMillisecond(task.time)
                      }
                      renderer={renderer}
                    />
                  </p>
                ),
              }
            : {
                extra: (
                  <p>
                    <b>Time Given:</b> {task.time}
                  </p>
                ),
              };
        return (
          <Card
            key={task._id}
            style={{ marginBottom: "20px" }}
            title={task.name}
            {...extra}
            actions={[
              <DeleteOutlined key="1" onClick={() => deleteTask(task._id)} />,
              <EditOutlined key="2" onClick={() => editTask(task)} />,
              task.status === "todo" && (
                <p onClick={() => makeProgress(task._id, "inprogress")}>
                  Move to InProgress
                </p>
              ),
              task.status === "inprogress" && task.progress === "100" && (
                <p onClick={() => makeProgress(task._id, "completed")}>
                  Move to Completed
                </p>
              ),
            ]}
          >
            {task.status === "inprogress" && (
              <>
                <Progress percent={task.progress} style={{ marginRight: 8 }} />
                <Button.Group>
                  <Button
                    disabled={task.progress === 100}
                    onClick={() => increase(task._id, task.progress)}
                    icon={<PlusOutlined />}
                  >
                    Add Progress
                  </Button>
                </Button.Group>
              </>
            )}
            <p style={{ marginTop: "30px" }}>
              <b>Task Description:</b> {task.description}
            </p>
            <p style={{ marginTop: "30px", textTransform: "capitalize" }}>
              <b>Priority:</b> {task.priority} Priority
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default TasksTab;
