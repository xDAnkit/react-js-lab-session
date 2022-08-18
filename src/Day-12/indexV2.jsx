import { useEffect } from "react";
import { useState, useMemo } from "react";

const UseMemov2 = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setFilterUsers(data);
        setUsers(data);
      });
  }, []);

  /* useEffect(() => {
    const filteredtask = users.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilterUsers(filteredtask);
  }, [search]); */

  const _handleInputChange = (e) => {
    const { value } = e.target;

    const filteredtask = users.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilterUsers(filteredtask);
    setSearch(value);
  };

  console.log("Render");
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Search here"
          onChange={_handleInputChange}
        />
      </div>

      {filterUsers.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default UseMemov2;
