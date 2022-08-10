import { useState } from "react";
import { Alert, Button, Container } from "reactstrap";
import ButtonChildComponent from "./ButtonChildComponent";
import DisplayAlert from "./DisplayAlert";
import InputText from "./InputText";
import PropDrillingA from "./Prop-Drilling/A";

const CalculatorV5 = () => {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [result, setResult] = useState(0);

  const _handleAdd = () => {
    setResult(Number(numOne) + Number(numTwo));
  };

  return (
    <Container style={{ padding: "12px" }}>
      <PropDrillingA data="Vasi" />
      <DisplayAlert data={result} />

      <div>
        <InputText
          value={numOne}
          type="number"
          //onChange={(e) => setNumOne(e.target.value)}
          onTextChange={(e) => {
            console.log("Parent Comp: e: ", e.target.value);
            setNumOne(e.target.value);
          }}
        />

        <InputText
          value={numTwo}
          type="number"
          onTextChange={(e) => setNumTwo(e.target.value)}
        />
      </div>
      <ButtonChildComponent label="Add" onBtnClick={_handleAdd} />
    </Container>
  );
};

export default CalculatorV5;
