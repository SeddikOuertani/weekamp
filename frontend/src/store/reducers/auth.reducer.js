import { createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "../actiontypes/auth.actiontypes";

let initialState = {
    isLoggedIn: true,
    user : null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionTypes.LOGIN, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
    })
    .addCase(actionTypes.REGISTER, (state, action) => {
        console.log("user registered successfully");
    })
    .addCase(actionTypes.VERIFY_ACCOUNT, (state, action) => {
         
    });
});
