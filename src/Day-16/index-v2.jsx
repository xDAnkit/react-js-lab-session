import { useParams } from "react-router-dom";

const PathParamsV2 = () => {
  const { id, superman, power } = useParams();
  console.log("LN5: ", { id, superman, power });
  return (
    <>
      <p>
        My name is {superman} &amp; my Power is {power}
      </p>
    </>
  );
};

export default PathParamsV2;
