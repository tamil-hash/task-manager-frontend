
import ModuleCss from "./Input.module.scss";

interface Props{
    type: string,
    value?: string,
    label?: string,
    onChange?: () => void,
}

const Input = ({ type, value,label,onChange}:Props) => {
    return (
        <div className={ModuleCss.inputContainer}>
            <p>
            {label}
            </p>
      <input
        className={ModuleCss.input}
        onChange={onChange}
        type={type}
        value={value}
        />
        </div>
    );
};

export default Input