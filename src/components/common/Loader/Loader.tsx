import { LoadingOutlined } from "@ant-design/icons";

//css
import ModuleCss from "./Loader.module.scss";

const Loader = () => {
    return (
      <div className={ModuleCss.container} >
        <LoadingOutlined style={{ fontSize: '30px' }} />
      </div>
    );
};

export default Loader;