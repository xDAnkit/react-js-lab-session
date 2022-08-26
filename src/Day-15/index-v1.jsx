import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavigationV1About = () => {
  const mouseMove = (event) => {
    console.log(event);
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseMove]);

  useEffect(() => {
    console.log("About is rendered");
    return () => {
      console.log("About is unmounting");
    };
  }, []);
  return (
    <>
      <p>I'm a NavigationV1About component</p>
      <Link to={"/"}>Open Home</Link>
    </>
  );
};

export default NavigationV1About;
