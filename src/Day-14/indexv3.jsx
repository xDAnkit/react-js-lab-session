import { useContext } from "react";
import { nameContext } from "../App";

const Day14Help = () => {
  const uName = useContext(nameContext);
  return (
    <>
      <p>Day14Help: {uName}</p>
    </>
  );
};

export default Day14Help;
