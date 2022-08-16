import { useState } from "react";

const MeraCompV1 = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function fetchUsers() {
    if (users.length !== 0) {
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        console.log("LN6: ", data);
        setUsers(data);
        setIsLoaded(true);
      });
  }

  if (!isLoaded) {
    fetchUsers();
  }

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

export default MeraCompV1;
