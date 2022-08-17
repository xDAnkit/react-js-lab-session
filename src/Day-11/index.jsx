import { useState } from "react";
import Greetings from "./Greetings";

const Day11V1 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Click me</button>
      </div>
      <div>
        <Greetings name="Vasi" counter={counter} />
        <Greetings name="Vasi1" />
        <Greetings name="Vasi2" />
        <Greetings name="Vasi3" counter={counter} />
        <Greetings name="Vasi4" />
        <Greetings name="Vasi5" />
        <Greetings name="Vasi6" />
        <Greetings name="Vasi7" />
        <Greetings name="Vasi8" />
        <Greetings name="Vasi9" />
        <Greetings name="Vasi11" />
        <Greetings name="Vasi12" />
        <Greetings name="Vasi14" />
        <Greetings name="Vasi13" />
        <Greetings name="Vasi1111" />
        <Greetings name="Vasi1111111" />
        <Greetings name="Vasi111" />
      </div>
    </>
  );
};

export default Day11V1;
