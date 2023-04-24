import { useState } from "react";
import { Form, Input, Button, message,Typography } from "antd";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//components
import UnAuthourizedLayout from "../../../layouts/UnauthourizedLayout/UnAuthourziedLayout";

//api
import axiosInstance from "../../../../utils/axios";
import { setUserDetails } from "../../../../store/authSlice";

const { Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onFormSubmit = async (loginUserData: {
    email: string;
    password: string;
  }) => {
    try{
      setIsLoading(true);
      const loginData = await axiosInstance.post("login", loginUserData);
      dispatch(setUserDetails(loginData.data));
      localStorage.setItem("refreshToken",loginData.data.refreshToken)
      navigate("/tasks");
      message.success("Logged In successfully.");
    }catch(error:any){
      console.log(error)
      if(error.response.status===400){
        message.error("Invalid Credentials")
      }
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <UnAuthourizedLayout title="Login" onSubmit={onFormSubmit}>
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
        rules={[{ required: true, message: "Please Enter your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <Text key="1">
        New User?&nbsp;
        <Link to="/signup">Signup</Link>
      </Text>
    </UnAuthourizedLayout>
  );
};

export default Login;
