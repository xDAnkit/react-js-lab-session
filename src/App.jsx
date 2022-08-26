import { createContext } from "react";
import AboutMe from "./Components/AboutMe";
//import Home, { Home2 as VasiFile } from "./Home";
import HomeFile, { Home2 } from "./Home";
// import defaultWalaName from "kaha se chahiye"
// import {simple wale export} from "kaha se chahiye"
// import defaultWalaName, {simple wale export}  from "kaha se chahiye"
// import {simple wale export as koi new name} from from "kaha se chahiye"

// Avoid using since it's loading the entire file
//const HomeFile = require('./Home')

import Day14HomeV1 from "./Day-14/indexv1";
import Day14About from "./Day-14/indexv2";
import { useState } from "react";
import APICalling from "./Day-14/indexv6";

// name Context
export const nameContext = createContext("");
const NameProvider = nameContext.Provider;
export const NameConsumer = nameContext.Consumer;

// City Context
export const cityContext = createContext("");
const CityProvider = cityContext.Provider;
export const CityConsumer = cityContext.Consumer;

function App() {
  const [name, setName] = useState("Vasi");
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <CityProvider value="Paris">
        <NameProvider value={name}>
          <APICalling />
        </NameProvider>
      </CityProvider>
    </>
  );
}

export default App;
