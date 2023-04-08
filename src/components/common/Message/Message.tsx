import { Button, message, Space } from "antd";

interface Props {
  type: "success" | "error" | "info" | "warning" | "loading";
  content: string;
}

const Message = ({ type, content }: Props) => {
  message.open({ type, content });
};

const destroyMessage = () => {
    message.destroy();
}

export default {Message, destroyMessage};
