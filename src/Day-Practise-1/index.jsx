import { useContext } from "react";
import { nameContext } from "../App";

const DayRevisionV1 = () => {
  const userName = useContext(nameContext);
  console.log({ userName });

  return <p>My name is {userName}</p>;
};

export default DayRevisionV1;
