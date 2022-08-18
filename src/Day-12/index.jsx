import { useMemo } from "react";
import { useState } from "react";

const UseMemoV1 = () => {
  const [counter, setCounter] = useState(0);

  const doCalculation = useMemo(() => {
    let count = 0;
    for (let i = 0; i < 400000; i++) {
      console.log({ i });
      count += i;
    }
    return count;
  }, []);

  return (
    <>
      <p>
        Count {counter} {doCalculation}
      </p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Incre.
      </button>
    </>
  );
};

export default UseMemoV1;
