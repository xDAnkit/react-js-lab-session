import { useEffect } from "react";
import { useState } from "react";

const MeraCompV2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <p>I'm inside MeraCompV1 </p>
      {users.map((elem) => {
        return (
          <div key={elem.id}>
            <p>{elem.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default MeraCompV2;
