//css
import ModuleCss from "./NoTask.module.scss";

interface Props {
  taskType: String;
}

const NoTask = ({ taskType }: Props) => {
  return (
    <div className={ModuleCss.container}>
      <h2>
        No Task Found in <b>{taskType}</b>
      </h2>
    </div>
  );
};

export default NoTask;
