import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./actions/cityReducer";

export const store = configureStore({
  reducer: { info: infoReducer },
});