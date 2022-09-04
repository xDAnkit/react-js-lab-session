import { Component } from "react";
import FourthComp from "./FourthComp";
import SecondComp from "./SecondComp";
import ThirdComp from "./ThirdComp";

class FirstComp extends Component {
  state = {
    counter: 0,
  };

  _handleChange = () => {};

  render() {
    return (
      <>
        <div>
          <p>Counter: {this.state.counter}</p>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 });
            }}
          >
            Increment
          </button>
        </div>
        <div>
          <p>I'm a class component</p>
        </div>
        <SecondComp />
        <ThirdComp />
        <FourthComp clickme={this._handleChange} />
      </>
    );
  }
}

export default FirstComp;
