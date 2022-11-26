import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes/campsite.actiontypes";
import axios from "axios";
import { BASE_API_URL } from "../global";

let initialState = {
  campsites: [],
  filteredCampsites: [],
  campsitesLoading: false,
  error: null,
};

const CAMPSITE_BASE_URL = "/campsites";

export const getCampsites = createAsyncThunk(
  actionTypes.GET_CAMPSITE_LIST,
  async () => {
    return (await axios.get(BASE_API_URL + CAMPSITE_BASE_URL)).data.data;
  }
);


const campsiteSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {
    filterCampsites: (state, action) => {
      state.filteredCampsites = state.campsites.filter((campsite) => {
        return campsite.name.contains("Camp");
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampsites.pending, (state) => {
        state.campsitesLoading = true;
      })
      .addCase(getCampsites.fulfilled, (state, action) => {
        state.campsitesLoading = false;
        state.campsites = action.payload;
      });
  },
});

export const { getCampsiteByEventId, filteredCampsites } = campsiteSlice.actions;
export default campsiteSlice.reducer;