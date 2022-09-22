import { signal } from "@preact/signals-react";

const counter = signal(0);

const Day20V1 = () => {
  console.log("Re-render Parent");
  return (
    <>
      <p>My Counter inside Parent is : {counter}</p>
      <button onClick={() => counter.value++}>Increment from Parent</button>
      <Day20V2 />
    </>
  );
};

const Day20V2 = () => {
  console.log("Re-render Child");

  return (
    <>
      <p>My Counter inside Child is : {counter}</p>

      <button onClick={() => counter.value++}>Increment from Child</button>
    </>
  );
};

export default Day20V1;
