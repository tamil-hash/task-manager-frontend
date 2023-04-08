import { Form, Card } from "antd";
import Header from "../../common/Header";
import ModuleCss from "./UnAuthourizedLayout.module.scss";

interface Props {
  title: String;
  children: React.ReactNode;
  onSubmit: (e: { email: string; password: string }) => void;
}

const UnAuthourizedLayout = ({ title, children,onSubmit }: Props) => {
  return (
    <div className={ModuleCss.container}>
      <Header />
      <Card className={ModuleCss.customCardStyle} type="inner" title={title}>
        <Form
          name="login"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onSubmit}
        >
          {children}
        </Form>
      </Card>
    </div>
  );
};

export default UnAuthourizedLayout;
