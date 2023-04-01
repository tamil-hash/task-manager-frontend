import { Form,Card} from "antd";
import ModuleCss from "./UnAuthourizedLayout.module.scss";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

interface Props{
  title: String,
  children: React.ReactNode,
}

const UnAuthourizedLayout = ({title,children}:Props) =>{
    return (
      <div className={ModuleCss.container} >
        <Form
          name="login"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Card title={title}>{children}</Card>
        </Form>
      </div>
    );
}

export default UnAuthourizedLayout;