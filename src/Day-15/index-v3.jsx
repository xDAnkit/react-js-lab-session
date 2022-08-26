import { Link } from "react-router-dom";

const NavigationV1NotFound = () => {
  return (
    <>
      <p>The page you're trying is not available</p>
      <Link to={"/"}>Go to home</Link>
    </>
  );
};

export default NavigationV1NotFound;
