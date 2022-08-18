import { useEffect } from "react";
import { useState, useMemo } from "react";

const UseMemov3 = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setSearch("");
        setUsers(data);
      });
  };

  const filteredUsers = useMemo(() => {
    const filteredResult = users.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return filteredResult;
  }, [search, users]);

  console.log("Render");
  return (
    <>
      <button onClick={loadUsersData}>Refresh API's</button>
      <div>
        <input
          value={search}
          type="search"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredUsers.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default UseMemov3;
