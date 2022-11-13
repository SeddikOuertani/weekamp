import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes/event.actiontypes";
import axios from "axios";
import { BASE_API_URL } from "../global";

let initialState = {
  events: [],
  filteredEvents: [],
  eventsLoading: false,
  error: null,
};

const EVENT_BASE_URL = "/events";

export const getEventList = createAsyncThunk(
  actionTypes.GET_EVENT_LIST,
  async () => {
    return (await axios.get(`${BASE_API_URL}${EVENT_BASE_URL}`)).data.data; 
  }
);

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    filterEvents: (state, action) => {
      state.filteredEvents = action.events.filter((event) => {
        return event.name.contains("Camp");
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEventList.pending, (state) => {
        console.log("pending");
        state.eventsLoading = true;
      })
      .addCase(getEventList.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.eventsLoading = false;
        state.events = action.payload;
      });
  },
});

export const { filterEvents } = eventSlice.actions;
export default eventSlice.reducer;
