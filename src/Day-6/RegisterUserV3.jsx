import { useState } from "react";
import { Container, Input, Row } from "reactstrap";

function RegisterUserV3() {
  const [fName, setName] = useState("");
  const [lName, setLastName] = useState("");
  const [cityNameDedo, cityNamekoSetKardo] = useState("");

  console.log("Re-render");
  return (
    <>
      <Container>
        <Row>
          <Input
            name="fName"
            placeholder="Enter First Name"
            value={fName}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row>
          <Input
            name="lName"
            placeholder="Enter Last Name"
            value={lName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Row>
        <Row>
          <Input
            name="cityName"
            placeholder="Enter City Name"
            value={cityNameDedo}
            onChange={(e) => cityNamekoSetKardo(e.target.value)}
          />
        </Row>
      </Container>

      <p>
        My name is {fName} {lName} &amp; I'm from {cityNameDedo}
      </p>
    </>
  );
}

export default RegisterUserV3;
