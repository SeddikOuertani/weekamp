import { ADD_EVENT, GET_EVENT_LIST } from "../actiontypes/event.actiontypes";
import { createAction } from "@reduxjs/toolkit";

export const addEvent = createAction(ADD_EVENT, event => {

    return {
        payload : "new event"
    }
});
export const getEventList = createAction(GET_EVENT_LIST, events => {
    return {
        payload : ["event", "event", "event"]
    }
});
