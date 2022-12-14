import { useEffect } from "react";
import { useState } from "react";

const MyCompV3 = () => {
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [list, setList] = useState([]);

  const [users, setUsers] = useState([]); //[{},{}]
  const [searchValue, setSearchValue] = useState("");
  const [filterUser, setFilterUser] = useState([]); //[{},{}]

  const handelFilter = () => {
    // We'll retrive filter data from the users array
    const filteredResults = users.filter((item) => {
      return item.name.toLowerCase().search(searchValue.toLowerCase()) === 0;
    });

    setFilterUser(filteredResults)

   
  };

  useEffect(() => {
    console.log("LN 9 Search: ", search);

    // API call by default on load
  }, [search]);

  useEffect(() => {
    console.log("LN 14 Search2: ", search2);
    if (!search) {
      return;
    }

    // API call for that specific search
  }, [search2]);

  useEffect(() => {
    console.log("LN13 Search: ", search);
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search here"
          value={search2}
          onChange={(e) => setSearch2(e.target.value)}
        />
      </div>
    </>
  );
};

export default MyCompV3;
