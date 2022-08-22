import React, { memo, useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

const ShowOutput = memo((props) => {
  console.log("render", props);
  return (
    <>
      <p>{props.data}</p>
    </>
  );
});

const UseCallbackV1 = () => {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [result2, setResult2] = useState(0);

  const add = useCallback(() => {
    console.log({ num1, num2 });
    setResult(+num1 + +num2);
  }, [num1, num2]);

  const multiply = useCallback(() => {
    console.log({ num3, num4 });
    setResult2(num3 * num4);
  }, []);

  const finalSum = useMemo(() => {
    return result + result2;
  }, []);

  return (
    <>
      <div>
        <ShowOutput data={result} add={add} />
        <input value={num1} onChange={(e) => setNum1(e.target.value)} />
        <input value={num2} onChange={(e) => setNum2(e.target.value)} />
        <button onClick={add}>Add</button>
      </div>

      <div>
        <ShowOutput data={result2} multiply={multiply} />
        <input value={num3} onChange={(e) => setNum3(e.target.value)} />
        <input value={num4} onChange={(e) => setNum4(e.target.value)} />
        <button onClick={multiply}>Add</button>
      </div>
    </>
  );
};

export default UseCallbackV1;
