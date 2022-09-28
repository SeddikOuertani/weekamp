import { createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes/event.actiontype";

let initialState = {
  events: [],
  getEventsLoading: false,
  getEventLoading: false,
  addEventLoading: false,
  updateEventLoading: false,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionTypes.ADD_EVENT, (state, action) => {
      state.events.push(action.payload);
    })
    .addCase(actionTypes.GET_EVENT_LIST, (state, action) => {
      state.events = action.payload;
    });
});
