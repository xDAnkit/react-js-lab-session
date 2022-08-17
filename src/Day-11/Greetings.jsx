import { memo } from "react";
const Greetings = ({ name }) => {
  console.log("Rendering Greetings", name);
  return (
    <>
      <p>
        Welcome <strong>{name}</strong>
      </p>
    </>
  );
};

export default memo(Greetings);
