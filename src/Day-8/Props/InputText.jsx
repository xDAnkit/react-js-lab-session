import { Input } from "reactstrap";

const InputText = ({
  type = "text",
  value,
  onTextChange,
  placeholder = "Enter text",
  name,
}) => {
  /*   
  const {
    type = "text",
    value,
    onTextChange,
    placeholder = "Enter text",
    name,
  } = props; 
  */
  return (
    <Input
      style={{
        border: "none",
        borderBottom: "1px solid silver",
        borderRadius: 0,
        marginBottom: "12px",
      }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        console.log("Child Comp: e", e);
        onTextChange(e);
      }}
      name={name}
    />
  );
};

export default InputText;
