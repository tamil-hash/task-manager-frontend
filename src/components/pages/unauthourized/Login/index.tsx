import { useState } from "react";

//components
import UnauthLayout from "../../../Layouts/UnauthLayout";
import Form from "../../../common/Form";
import Input from "../../../common/Input";
import Button from "../../../common/Button";

const Login = () => {

  const onLoginSubmit = () => {
    
  }

  return (
    <UnauthLayout>
      <Form onSubmit={onLoginSubmit}>
        <Input label="Email:" type="email" />
        <Input label="Password:" type="password" />
        <Button htmlType="submit" type="primary" >Login</Button>
      </Form>
    </UnauthLayout>
  );
};
export default Login;
