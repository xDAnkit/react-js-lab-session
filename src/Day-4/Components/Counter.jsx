import { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
    };
  }

  _handleIncrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log({ state: this.state.counter });
  };

  render() {
    console.log("Re-Render");
    return (
      <>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this._handleIncrementCounter}>
          Increment Counter
        </button>
        <input placeholder="Enter Data" />
      </>
    );
  }
}

export default Counter;
