import { Link } from "react-router-dom";

const profiles = [
  {
    id: 1,
    name: "vishal",
    power: "Running",
  },
  {
    id: 2,
    name: "Vasi",
    power: "solo Travel",
  },
  {
    id: 3,
    name: "Ashwini",
    power: "Art",
  },
  {
    id: 4,
    name: "Kanasvi",
    power: "Photography",
  },
];

const PathParamsV1 = () => {
  return (
    <>
      <p>I'm a path Params</p>
      {profiles.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/path/${item.name}/${item.power}`}>
              Open {item.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PathParamsV1;
