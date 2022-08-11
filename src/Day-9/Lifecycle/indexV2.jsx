import { Component, PureComponent } from "react";

class LifecycleV2 extends PureComponent {
  constructor(props) {
    super(props);
    console.log("1 CC- Inside Constructor");
  }

  componentDidMount() {
    console.log("3 CC- Inside componentDidMount");
  }

  render() {
    console.log("2 CC- Inside render");
    return <>Child Component</>;
  }
}

export default LifecycleV2;
