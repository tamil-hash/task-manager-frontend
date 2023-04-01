interface Props {
  onSubmit: () => void;
  children: React.ReactNode;
}

const Form = ({ onSubmit, children }: Props) => {
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return <form onSubmit={onFormSubmit}>{children}</form>;
};

export default Form;
