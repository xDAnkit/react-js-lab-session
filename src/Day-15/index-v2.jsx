import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavigationV1Home = () => {
  useEffect(() => {
    console.log("Home is rendered");
    return () => {
      console.log("Home is unmounting");
    };
  }, []);

  return (
    <>
      <p>I'm a NavigationV1Home component</p>
      <Link to={"/about"}>Open About</Link>
      <br />
      <Link to={"/ankit"}>Open Ankit Profile</Link>
    </>
  );
};

export default NavigationV1Home;
