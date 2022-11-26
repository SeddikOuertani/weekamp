import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/event.slice";
import campsiteReducer from "./slices/campsite.slice";

let Store = configureStore({
  reducer: { events: eventReducer, campsites : campsiteReducer},
});

export default Store;
