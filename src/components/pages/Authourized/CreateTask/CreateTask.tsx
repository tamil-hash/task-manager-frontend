//components
import { Card, Form, Input, Button, InputNumber, Select } from "antd";
import AuthourizedLayout from "../../../layouts/AuthourizedLayout";
import { useState } from "react";
import "./createTask.module.scss";
const CreateTask = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthourizedLayout>
      <Card title="Create New Task">
        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onSubmit}
        >
          <Form.Item
            label="Task Name"
            name="taskName"
            rules={[{ required: true, message: "Please Enter the task name" }]}
          >
            <Input type="text" placeholder="Task Name" />
          </Form.Item>
          <Form.Item
            label="Task Description"
            name="taskDescription"
            rules={[
              { required: true, message: "Please Enter the task description" },
            ]}
          >
            <Input type="text" placeholder="Task Description" />
          </Form.Item>
          <Form.Item
            label="Select the priority"
            name="priority"
            rules={[{ required: true, message: "Please Select the proirity" }]}
          >
            <Select>
              <Select.Option value="low">Low Proirity</Select.Option>
              <Select.Option value="medium">Medium Proirity</Select.Option>
              <Select.Option value="high">High Proirity</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Set Time for the task"
            name="timer"
            wrapperCol={{ span: 8 }}
            rules={[
              { required: true, message: "Please Set Time for the task" },
            ]}
          >
            <InputNumber min={1} max={10}/>
          </Form.Item>
          <Form.Item
            name="timerFormat"
            wrapperCol={{ span: 8 }}
            rules={[
              { required: true, message: "Please Set Time for the task" },
            ]}
          >
            <Select>
              <Select.Option value="hours">Hours</Select.Option>
              <Select.Option value="days">Days</Select.Option>
              <Select.Option value="months">Months</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button loading={isLoading} type="primary" htmlType="submit">
              Create Task
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </AuthourizedLayout>
  );
};

export default CreateTask;
