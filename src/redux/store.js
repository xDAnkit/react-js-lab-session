import { configureStore } from "@reduxjs/toolkit";
import reducer from "./root-reducer";

export default configureStore({
  reducer,
});
