import { Component } from "react";
import { CityConsumer, NameConsumer } from "../App";

class Day14V5 extends Component {
  render() {
    return (
      <>
        <p>I'm a Day14V5 class Component</p>
        <NameConsumer>
          {(name) => {
            return (
              <CityConsumer>
                {(city) => {
                  return (
                    <p>
                      My name is {name}. I'm from {city}
                    </p>
                  );
                }}
              </CityConsumer>
            );
          }}
        </NameConsumer>
      </>
    );
  }
}

export default Day14V5;
