import { createAction } from "@reduxjs/toolkit";
import { GET_EVENT_LIST } from "../actiontypes/auth.actiontypes";

export const getEventList = createAction(GET_EVENT_LIST, events => {
    return {
        payload : ["event", "event", "event"]
    }
});
