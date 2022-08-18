import { useState } from "react";
import { memo } from "react";

const MemoV4Sample2 = memo(({ data }) => {
  console.log("Re-Render", data);
  return (
    <>
      <p>{data.name}</p>
      <p>{data.details.city}</p>
    </>
  );
});

const MemoV4Sample = memo(({ children }) => {
  return <>{children}</>;
});

const MemoV4 = () => {
  const [counter, setCounter] = useState(0);
  const [profile, setProfile] = useState({
    name: "Vishal",
    nums: [],
    details: {
      city: "Las Vegas",
      count: 0,
    },
  });

  const _handleUpdateProfile = () => {
    //const copy = { ...profile };
    //copy.details.count = copy.details.count + 1;
    //setProfile({ ...copy });

    setProfile((prevState) => {
      return {
        ...prevState,
        nums: [...prevState.nums, 1],
      };
    });
  };
  return (
    <>
      Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>Incre.</button>
      <button onClick={_handleUpdateProfile}>Update Count</button>
      <MemoV4Sample2 data={profile} />
      <MemoV4Sample>
        <p>Hello Ankit</p>
        <p>Hello Ritesh</p>
        <p>Hello Dhiraj</p>
      </MemoV4Sample>
    </>
  );
};

export default MemoV4;
