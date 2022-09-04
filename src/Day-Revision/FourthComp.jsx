import { PureComponent } from "react";

class FourthComp extends PureComponent {
  render() {
    console.log("Rendering Pure Component");
    return (
      <div>
        <p>I'm a Pure Component</p>
      </div>
    );
  }
}

export default FourthComp;
