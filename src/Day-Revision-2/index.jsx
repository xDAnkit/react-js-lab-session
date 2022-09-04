import { Component } from "react";

class DayRevisionV2 extends Component {
  constructor() {
    this.name = this.name.bind(this);
  }

  state = { counter: 0 };

  name() {
    this.setState({ counter: this.state.counter + 1 });
    console.log("click");
  }

  _handleUpdateCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("LN17: ", this);
    const { counter } = this.state;
    return (
      <>
        <p>Counter: {counter}</p>
        <button onClick={this.name}>Increment</button>
      </>
    );
  }
}

export default DayRevisionV2;
