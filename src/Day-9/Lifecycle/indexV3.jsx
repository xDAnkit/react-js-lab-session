import { Component } from "react";
import LifecycleV2 from "./indexV2";
import { BarLoader } from "react-spinners";
import { Col, Container, Row } from "reactstrap";

class LifecycleV3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <Container>
        <Row>
          <Col style={{ padding: "20px" }}>
            <BarLoader color={"#325795"} loading={isLoading} size={150} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LifecycleV3;
