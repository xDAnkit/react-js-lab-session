import { useContext } from "react";
import { cityContext, nameContext } from "../App";
import Day14V5 from "./indexv5";

const Day14Blogs = () => {
  const uName = useContext(nameContext);
  const uCity = useContext(cityContext);

  return (
    <>
      <p style={{ color: uName === "vasi" ? "red" : "black" }}>
        Day14Blogs: {uName} {uCity}
      </p>
      <Day14V5 />
    </>
  );
};

export default Day14Blogs;
