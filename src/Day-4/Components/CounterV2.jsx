import { Component } from "react";
class CounterV2 extends Component {
  state = {
    counter: 10,
    name: "Ritesh",
  };

  _handleIncrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("Re-Render");
    return (
      <>
        <p>V2 Name: {this.state.name}</p>
        <p>V2 Name: {this.state.name}</p>
        <p>V2 Name: {this.state.name}</p>
        <p>V2 Name: {this.state.name}</p>
        <p>V2 Name: {this.state.name}</p>
        <p>V2 Name: {this.state.name}</p>
        <button onClick={this._handleIncrementCounter}>
          Increment Counter
        </button>
        <input
          placeholder="Enter Data"
          value={this.state.name}
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
        />
      </>
    );
  }
}

export default CounterV2;
