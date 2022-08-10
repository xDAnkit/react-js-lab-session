import { Alert, Input } from "reactstrap";

const DisplayAlert = (props /* The name can be anything */) => {
  console.log(props);
  return (
    <Alert color="primary">
      <Input value={props.data} readOnly />
    </Alert>
  );
};

export default DisplayAlert;
