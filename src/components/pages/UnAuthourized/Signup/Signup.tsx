import { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//components
import UnAuthourizedLayout from "../../../layouts/UnauthourizedLayout/UnAuthourziedLayout";

//api
import axiosInstance from "../../../../utils/axios";
import { setUserDetails } from "../../../../store/authSlice";

const { Text } = Typography;
const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = async (userData: {
    email: string;
    password: string;
  }) => {
    try {
      setIsLoading(true);
      const loginData = await axiosInstance.post("signup", userData);
      dispatch(setUserDetails(loginData.data));
      navigate("/tasks");
      message.success("User Account Created Successfully.");
    } catch (error:any) {

      if (error.response.status === 409) {
        message.error("User Already exist.");
      }else{
        message.error("Something went wrong. Please try again.");
      }


      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UnAuthourizedLayout onSubmit={onFormSubmit} title="Signup">
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
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={isLoading} type="primary" htmlType="submit">
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
