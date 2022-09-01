import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterUser from "./Day-5/RegisterUser";
import RegisterUserV2 from "./Day-5/RegisterUserV2";
import RegisterUserV3 from "./Day-6/RegisterUserV3";
import NestedStateWithFC from "./Day-7/NestedStateWithFC";
import MyTodo from "./Day-7/MyTodo";
import Onboarding from "./Day-7/Onboarding";
import CalculatorV5 from "./Day-8/Props";
import LifecycleV1 from "./Day-9/Lifecycle";
import LifecycleV3 from "./Day-9/Lifecycle/indexV3";
import MeraCompV1 from "./Day-10/useEffect";
import MyCompV3 from "./Day-10/useEffect/indexv3";
import Day11V1 from "./Day-11";
import MemoV4 from "./Day-11/MemoV4";
import UseMemoV1 from "./Day-12";
import UseMemov2 from "./Day-12/indexV2";
import UseMemov3 from "./Day-12/indexV3";
import UseCallbackV1 from "./Day-13";
import UseCallbackV2 from "./Day-13/index-v2";
import ParentCompV1 from "./Day-13/index-v3";
import Day13V4 from "./Day-13/index-v4";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationV1Home from "./Day-15/index-v2";
import NavigationV1About from "./Day-15/index-v1";
import NavigationV1NotFound from "./Day-15/index-v3";
import PathParamsV1 from "./Day-16";
import PathParamsV2 from "./Day-16/index-v2";
import Day17V1 from "./Day-17";
import Day17V2 from "./Day-17/index-v2";
import Navigation from "./Day-18/src/navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </>
);
