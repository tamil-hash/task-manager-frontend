import { Card, Select } from "antd";
import Loader from "../../../../common/Loader";
import NoTask from "../../../../common/NoTask";
//css
import ModuleCss from "./TasksTab.module.scss";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

interface Props {
  tasks: Array<Object>;
  taskType: String;
  isLoading?: Boolean;
}

const TasksTab = ({ tasks, taskType, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />;
  }

  if (tasks.length === 0) {
    return <NoTask taskType={taskType} />;
  }

  const deleteTask = async(id: string) => {
    console.log(id);
  };

  const editTask = async(id: string) => {
    console.log(id);
  };

  const makeProgress = async(id:string) => {
    console.log(id)
  }

  return (
    <div className={ModuleCss.container}>
      {tasks.map((task: any) => (
        <Card
          key={task._id}
          style={{ marginBottom: "20px" }}
          title={task.name}
          actions={[
            <DeleteOutlined key="1" onClick={() => editTask(task._id)} />,
            <EditOutlined key="2" onClick={() => deleteTask(task._id)} />,
            <p onClick={()=>makeProgress(task._id)} >Move to InProgress</p>,
          ]}
        >
          <p>{task.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default TasksTab;
