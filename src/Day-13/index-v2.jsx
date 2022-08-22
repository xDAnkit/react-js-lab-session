import React, { memo, useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

const UseCallbackV2 = () => {
  const [num1, setNum1] = React.useState("");

  const output = useMemo(() => {
    return num1 * 2;
  }, [num1]);

  const output2 = useCallback(() => {
    setNum1(num1 * 3);
    return;
  }, [num1]);

  return (
    <>
      <div>
        <p>useState num1 : {num1}</p>
        <p>useMemo : {output}</p>
        <button
          onClick={() => {
            setNum1(+num1 + 1);
          }}
        >
          Incre
        </button>

        <button onClick={output2}>useCallback Incre</button>
      </div>
    </>
  );
};

export default UseCallbackV2;
