import { useState } from "react";

const DayRevisionV3 = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  console.log("Re-render:", name, city, state);

  return (
    <>
      <div>
        <label>Name: {name}</label>
        <input
          placeholder="Enter name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>City: {city}</label>
        <input
          placeholder="Enter city"
          value={city}
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label>State: {state}</label>
        <input
          placeholder="Enter State"
          value={state}
          name="state"
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </>
  );
};

export default DayRevisionV3;
