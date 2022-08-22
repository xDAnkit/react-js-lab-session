import { memo, useEffect } from "react";
import { useState } from "react";

const ChildComp = memo((props) => {
  const [result, setResult] = useState(props.data);

  console.log("Re-Render");

  useEffect(() => {
    setResult(props.data);
  }, [props.data]);

  return (
    <>
      <p>Output : {result}</p>
    </>
  );
});

const ParentCompV1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <>
      <ChildComp data={counter} />
      <ChildComp data={counter2} />

      <button onClick={() => setCounter(+counter + 1)}>Increment</button>
      <button onClick={() => setCounter2(+counter2 + 1)}>Increment 3</button>
    </>
  );
};

export default ParentCompV1;
