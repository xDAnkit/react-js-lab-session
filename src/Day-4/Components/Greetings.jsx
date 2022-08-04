import { Component } from "react";
import { Button, Container, Input, Row } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./index.css";

class Greetings extends Component {
  state = {
    name: "",
  };

  _handleInputChange = (e) => {
    console.log(e);
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Navbar color="dark" dark>
          <NavbarBrand href="/">
            <span>VSS</span>
          </NavbarBrand>
        </Navbar>

        <Container className="my-2">
          <Row>
            <Input
              placeholder="Enter name here"
              onChange={this._handleInputChange}
            />
          </Row>
          <Row className="my-2">
            <p>
              Hello <span>{this.state.name}</span>, Thank you for always
              supporting me. You know <span>{this.state.name}</span>, that you
              means alot to me in your life.{" "}
            </p>
            <p>
              <span>{this.state.name}</span>, i would like to wish you the best
              for your coming journey. Also <span>{this.state.name}</span> ,
              make sure to take care of yourself
            </p>
          </Row>
        </Container>
      </>
    );
  }
}

export default Greetings;
