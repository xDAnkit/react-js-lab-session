import AboutMe from "./Components/AboutMe";
//import Home, { Home2 as VasiFile } from "./Home";
import HomeFile, { Home2 } from "./Home";
// import defaultWalaName from "kaha se chahiye"
// import {simple wale export} from "kaha se chahiye"
// import defaultWalaName, {simple wale export}  from "kaha se chahiye"
// import {simple wale export as koi new name} from from "kaha se chahiye"

// Avoid using since it's loading the entire file
//const HomeFile = require('./Home')

function App() {
  return (
    <>
      <HomeFile.Home />
      <HomeFile.Home2 />
      <br />
      <Home2 />
      <div className=""></div>
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
    </>
  );
}

export default App;
