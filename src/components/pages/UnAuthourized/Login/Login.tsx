import { Form, Input, Button } from "antd";

//components
import UnAuthourizedLayout from "../../../layouts/UnauthourizedLayout/UnAuthourziedLayout";


const Login  =  () => {
    return (
      <UnAuthourizedLayout title="Login">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email" }]}
        >
          <Input size="large" type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </UnAuthourizedLayout>
    );
}

export default Login;