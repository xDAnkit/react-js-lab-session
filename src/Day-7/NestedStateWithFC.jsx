import { useState } from "react";
import { Container, Input, Row, Col } from "reactstrap";

const NestedStateWithFC = () => {
  const [profile, setProfile] = useState({
    fName: "",
    lName: "",
  });

  const _handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value }, e.target);
    //setProfile({ ...profile, [name]: value });
    setProfile((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <label>First Name</label>
            <Input
              placeholder="Enter first Name"
              value={profile.fName}
              name="fName"
              onChange={_handleInputChange}
            />
          </Col>
          <Col>
            <label>Last Name</label>
            <Input
              placeholder="Enter last Name"
              value={profile.lName}
              name="lName"
              onChange={_handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <p>
            My name is {profile.fName} {profile.lName}
          </p>
        </Row>
      </Container>
    </>
  );
};

export default NestedStateWithFC;
