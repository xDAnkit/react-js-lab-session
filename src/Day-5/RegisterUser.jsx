import { Component } from "react";
import { Container, Row, Col, Input } from "reactstrap";

class RegisterUser extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    contactNumber: "",
  };

  _handleUpdateFirstName = (e) => {
    this.setState({
      fName: e.target.value,
    });
  };

  _handleUpdateLastName = (e) => {
    this.setState({
      lName: e.target.value,
    });
  };

  _handleUpdateEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  _handleUpdateContactNo = (e) => {
    this.setState({
      contactNumber: e.target.value,
    });
  };

  render() {
    const { fName, lName, email, contactNumber } = this.state;
    return (
      <>
        <Container className="my-2">
          <Row>
            <Col>
              <Input
                placeholder="Enter first name here"
                value={fName}
                onChange={this._handleUpdateFirstName}
              />
            </Col>
            <Col>
              <Input
                placeholder="Enter last name here"
                value={lName}
                onChange={this._handleUpdateLastName}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                placeholder="Enter email here"
                type="email"
                value={email}
                onChange={this._handleUpdateEmail}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                placeholder="Enter phone here"
                type="number"
                value={contactNumber}
                onChange={this._handleUpdateContactNo}
              />
            </Col>
          </Row>
          <Row>
            <p>
              My name is {fName} {lName} &amp; you can email me on {email}. Also
              feel free to call me on {contactNumber}
            </p>
          </Row>
        </Container>
      </>
    );
  }
}

export default RegisterUser;
