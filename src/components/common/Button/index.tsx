import ModuleCss from "./Button.module.scss";

interface Props {
  htmlType: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type: string;
  children: React.ReactNode;
}

const Button = ({ htmlType, onClick, type, children }: Props) => {
  return (
    <button className={[ModuleCss.button,ModuleCss.type].join("")} type={htmlType} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;