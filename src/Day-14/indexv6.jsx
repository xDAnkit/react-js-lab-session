import { useState } from "react";
import { useEffect } from "react";
const APICalling = () => {
  const [beverages, setBeverages] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
      const parsedResponse = await response.json();
      console.log(parsedResponse.drinks);
      setBeverages(parsedResponse.drinks);
    })();
  }, []);

  return (
    <>
      <p>API Data</p>
      <ul>
        {beverages.map((item) => {
          return <li key={item.idDrink}>{item.strDrink}</li>;
        })}
      </ul>
    </>
  );
};

export default APICalling;
