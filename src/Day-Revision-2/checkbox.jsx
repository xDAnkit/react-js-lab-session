import { Component } from "react";

class CheckboxView extends Component {
  state = {
    selectedGender: "male",
  };
  _handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    console.log({ name, value });
    this.setState({
      selectedGender: value,
    });
  };

  render() {
    const { selectedGender } = this.state;
    console.log({ selectedGender });
    return (
      <>
        <div>
          <input
            type={"radio"}
            value="male"
            checked={selectedGender === "male"}
            onChange={this._handleInputChange}
          />
          Male
        </div>
        <div>
          <input
            type={"radio"}
            value="female"
            checked={selectedGender === "female"}
            onChange={this._handleInputChange}
          />{" "}
          Female
        </div>
      </>
    );
  }
}

export default CheckboxView;
