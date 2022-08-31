import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Day17V1 = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleOnNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/details");
      setLoading(false);
    }, 4000);
  };
  return (
    <>
      <p>{loading ? "Loading" : ""}</p>
      <p>Welcome to</p>
      <div>
        <button onClick={handleOnNavigate}>Do task &amp; Navigate</button>
        <Link to="/details">Details</Link>
        <br />
        <Link to="/details?q=10">Details iPhone</Link>
        <br />
        <Link to="/details?q=iphone">Details iPhone</Link>
        <br />
        <Link to="/details?q=apple">Details Apple</Link>
        <br />
        <Link to="/details?q=samsung">Details Samsung</Link>
      </div>
    </>
  );
};

export default Day17V1;
