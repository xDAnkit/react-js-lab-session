import { Component } from "react";
import { Container, Row, Col, Input } from "reactstrap";

class RegisterUserV2 extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    contactNumber: "",
    city: "",
    isMarried: "",
  };

  /*  _handleUpdateFirstName = (e) => {
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
  }; */

  _handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    //console.log({ name, value, checked, type });

    if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
      return;
    }

    this.setState(
      {
        //[e.target.name]: e.target.value, // fName: Ankit, lName: Jain, email: a@a.com, contactNumber: 99, anyKey: anyValue
        [name]: value, // fName: Ankit, lName: Jain, email: a@a.com, contactNumber: 99, anyKey: anyValue
      },
      () => {
        console.log("Inside: ", this.state[name]);
      }
    );

    console.log("Outside: ", this.state[name]);
  };

  _renderMaritalStatus = () => {
    const { isMarried } = this.state;
    if (isMarried === "") {
      return null;
    }

    return `I am ${isMarried ? "Married" : "Unmarried"}`;
  };

  render() {
    const { fName, lName, email, contactNumber, city, isMarried } = this.state;
    return (
      <>
        <Container className="my-2">
          <Row>
            <Col>
              <Input
                placeholder="Enter first name here"
                value={fName}
                name="fName"
                onChange={this._handleInputChange}
              />
            </Col>
            <Col>
              <Input
                placeholder="Enter last name here"
                value={lName}
                name="lName"
                onChange={this._handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                placeholder="Enter email here"
                type="email"
                value={email}
                name="email"
                onChange={this._handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                placeholder="Enter phone here"
                type="number"
                name="contactNumber"
                value={contactNumber}
                onChange={this._handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                placeholder="Enter city here"
                type="text"
                name="city"
                value={city}
                onChange={this._handleInputChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Input
                type="checkbox"
                name="isMarried"
                checked={isMarried}
                onChange={this._handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <p>
              My name is {fName} {lName} &amp;. I'm from {city}. You can email
              me on {email}. Also feel free to call me on {contactNumber}.{" "}
              {this._renderMaritalStatus()}
            </p>
          </Row>
        </Container>
      </>
    );
  }
}

export default RegisterUserV2;
