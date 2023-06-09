import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
