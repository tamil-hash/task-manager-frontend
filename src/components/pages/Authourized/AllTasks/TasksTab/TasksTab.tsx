import Loader from "../../../../common/Loader";
import NoTask from "../../../../common/NoTask";
//css
import ModuleCss from "./TasksTab.module.scss";

interface Props {
  tasks: Array<Object>;
  taskType: String;
  isLoading?: Boolean;
}

const TasksTab = ({ tasks, taskType,isLoading }: Props) => {

  if (isLoading) {
    return <Loader />;
  }

  if (tasks.length === 0) {
    return <NoTask taskType={taskType} />;
  }

  return <div className={ModuleCss.container}>{}</div>;
};

export default TasksTab;
