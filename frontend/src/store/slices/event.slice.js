import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes/event.actiontypes";
import axios from "axios";
import { BASE_API_URL } from "../global";

let initialState = {
  events: [],
  filteredEvents: [],
  eventsLoading: false,
  addEventLoading: false,
  addEventStatus: "idle", // idle | pending | rejected | fulfilled
  error: null,
};

const EVENT_BASE_URL = "/events";

export const getEventList = createAsyncThunk(
  actionTypes.GET_EVENT_LIST,
  async () => {
    return (await axios.get(`${BASE_API_URL}${EVENT_BASE_URL}`)).data.data;
  }
);

export const addEvent = createAsyncThunk(actionTypes.ADD_EVENT, async () => {
  return (await axios.post(`${BASE_API_URL}${EVENT_BASE_URL}`)).data.data;
});

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
      })
      .addCase(addEvent.pending, (state, action) => {
        console.log("pending");
        state.addEventLoading = true;
        state.addEventStatus = "pending"
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.addEventLoading = false;
        state.addEventStatus = "fulfilled"
      })
      .addCase(addEvent.rejected, (state, action) => {
        console.log("rejected");
        state.addEventStatus = "rejected"
        state.addEventLoading = false;
      });
  },
});

export const { filterEvents } = eventSlice.actions;
export default eventSlice.reducer;
