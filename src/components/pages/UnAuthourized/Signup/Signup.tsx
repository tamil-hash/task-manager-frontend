import { Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";
//components
import UnAuthourizedLayout from "../../../layouts/UnauthourizedLayout/UnAuthourziedLayout";

const { Text } = Typography;
const Signup = () => {
  return (
    <UnAuthourizedLayout title="Signup">
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please Enter your name" }]}
      >
        <Input type="text" placeholder="Name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please Enter your Email" },
          {
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input type="email" placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please Enter your Passsword" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm-password"
        rules={[{ required: true, message: "Please Enter your Passsword" }]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
      <Text key="1">
        Already have an account?&nbsp;<Link to="/login">Login</Link>
      </Text>
    </UnAuthourizedLayout>
  );
};

export default Signup;
