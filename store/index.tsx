import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./increment/increment.slice";
const store = configureStore({ reducer: counterReducer });

export default store;
