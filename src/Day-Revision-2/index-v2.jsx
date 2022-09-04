import { Component } from "react";

class DayRevisionV2B extends Component {
  state = {
    name: "Bhavika",
    city: "Pune",
    state: "MH",
  };

  /*   _handleInputChange = (e, key) => {
    console.log(e.target.value, key);
    this.setState({
      [key]: e.target.value,
    });
  }; */

  _handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log("LN22:", this.state[name], value);
      }
    );
  };

  render() {
    const { city, name, state } = this.state;
    return (
      <>
        <div>
          <label>Name</label>
          <input
            placeholder="Enter name"
            value={name}
            name="name"
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <label>City</label>
          <input
            placeholder="Enter city"
            value={city}
            name="city"
            onChange={this._handleInputChange}
          />
        </div>
        <div>
          <label>State</label>
          <input
            placeholder="Enter State"
            value={state}
            name="state"
            onChange={this._handleInputChange}
          />
        </div>
      </>
    );
  }
}

export default DayRevisionV2B;
