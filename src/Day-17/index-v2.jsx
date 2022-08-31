import { useSearchParams } from "react-router-dom";

const Day17V2 = () => {
  const [searchParams] = useSearchParams();
  console.log("Query: ", searchParams.get("q"), typeof searchParams.get("q"));
  console.log("Name: ", searchParams.get("name"));

  return <p>Welcome to</p>;
};

export default Day17V2;
