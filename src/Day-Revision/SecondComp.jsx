import { Component } from "react";
class SecondComp extends Component {
  render() {
    console.log("Rendering SecondComp Class Component");
    return (
      <>
        <div>
          <p>I'm a Second component</p>
        </div>
      </>
    );
  }
}

export default SecondComp;
