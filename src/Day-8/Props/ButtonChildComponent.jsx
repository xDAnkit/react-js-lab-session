import { Button } from "reactstrap";

const ButtonChildComponent = ({ label, onBtnClick }) => {
  return <Button onClick={onBtnClick}>{label}</Button>;
};

export default ButtonChildComponent;
