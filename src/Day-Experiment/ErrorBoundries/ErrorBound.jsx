import { Component } from "react";

class ErrorBoundaryComp extends Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  componentDidCatch(error) {
    this.setState({ error: `${error.name}: ${error.message}` });
    //Call api to inform server
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else {
      return <>{this.props.children}</>;
    }
  }
}

export default ErrorBoundaryComp;
