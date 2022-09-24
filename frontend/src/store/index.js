import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducers/event.reducer";

let Store = configureStore({ reducer: { event : eventReducer } });

export default Store;
