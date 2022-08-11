import { Component } from "react";
import LifecycleV2 from "./indexV2";

class LifecycleV1 extends Component {
  constructor(props) {
    super(props);
    console.log("1- Inside Constructor");
    this.state = {
      counter: 1,
      counter2: 2,
    };
  }

  componentDidMount() {
    console.log("3- Inside componentDidMount");
  }

  render() {
    console.log("2- Inside render");
    return (
      <>
        My name is Arun {this.state.counter} {this.state.counter2}
        <div>
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Increment
          </button>
          <button
            onClick={() => this.setState({ counter2: this.state.counter2 + 1 })}
          >
            Increment 2
          </button>
        </div>
        <LifecycleV2 counter={this.state.counter} />
      </>
    );
  }
}

export default LifecycleV1;
