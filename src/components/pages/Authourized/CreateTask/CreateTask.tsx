import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../../../utils/axios";
//components
import { Card, Form, Input, Button, InputNumber, Select, message } from "antd";
import "./createTask.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
const CreateTask = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");
  const selectedTask = useSelector((state: any) => state.task.selectedTask);
  const [isLoading, setIsLoading] = useState(false);
  const userId = useSelector((state: any) => state.auth.id);
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.auth.token);

  const onSubmit = async (data: any) => {
    try {
      const url = isEdit ? "edit":"create";
      setIsLoading(true);

      await axiosInstance.post(
        `/tasks/${url}`,
        {
          ...data,
          time: `${data.timer} ${data.timerFormat}`,
          createdBy: userId,
          _id:selectedTask._id
        },
        {
          headers: { token },
        }
      );
      if(isEdit){
        message.success("Task edited Successfully.");

      }else{
        message.success("Task created Successfully.");
      }
      navigate("/tasks");
    } catch {
      console.log("error");
      message.error("Something went wrong.Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  let initialValues = {};

  if (isEdit) {
    const { name, description, priority, time } = selectedTask;
    const [timer,timerFormat] = time.split(" ")

    initialValues = {
      taskName: name,
      taskDescription: description,
      priority,
      timer,
      timerFormat
    };
  }

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  return (
    <Card title="Create New Task">
      <Form
        form={form}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onSubmit}
        initialValues={initialValues}
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
          rules={[{ required: true, message: "Please Select the priority" }]}
        >
          <Select>
            <Select.Option value="low">Low priority</Select.Option>
            <Select.Option value="medium">Medium priority</Select.Option>
            <Select.Option value="high">High priority</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Set Time for the task"
          name="timer"
          wrapperCol={{ span: 8 }}
          rules={[{ required: true, message: "Please Set Time for the task" }]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item
          name="timerFormat"
          wrapperCol={{ span: 8 }}
          rules={[{ required: true, message: "Please Set Time for the task" }]}
        >
          <Select>
            <Select.Option value="hours">Hours</Select.Option>
            <Select.Option value="days">Days</Select.Option>
            <Select.Option value="months">Months</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={isLoading} type="primary" htmlType="submit">
            {isEdit?"Edit task":"Create task"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateTask;
