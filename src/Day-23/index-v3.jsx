import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const RefExample = () => {
  const [search, setSearch] = useState("");
  const [mereFocus, setMereFocus] = useState(false);
  const meraRef = useRef(null);
  const meraRef2 = useRef(null);
  const meraRef3 = useRef(null);
  const meraRef4 = useRef(null);

  useEffect(() => {
    meraRef3.current.focus();
    setMereFocus(true);
  }, []);

  const handleInputChange = () => {
    console.log(meraRef.current);
  };

  useEffect(() => {
    console.log("Search : ", search);
  }, [search]);

  return (
    <>
      <input type={"text"} ref={meraRef} />
      <input type={"text"} ref={meraRef2} />
      <input type={"text"} ref={mereFocus} />
      <input
        type={"text"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleInputChange}>Search</button>
    </>
  );
};

export default RefExample;
