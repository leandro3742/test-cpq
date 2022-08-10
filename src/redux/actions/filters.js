// import { SET_INITIAL_STATE } from "./gtt";
const SET_INITIAL_STATE_FILTERS = "SET_INITIAL_STATE_FILTERS";
export const SET_FILTER = "SET_FILTER";
export const FILTER_COMPONENTS = "FILTER_COMPONENTS";
export const REMOVE_ADVANCED_FILTER = "REMOVE_ADVANCED_FILTER";
export const ADD_ADVANCED_FILTER = "ADD_ADVANCED_FILTER";

export const setInitialStateFilters = (payload) => ({
    type: SET_INITIAL_STATE_FILTERS,
    payload,
});
export const filterComponents = (payload) => ({
    type: FILTER_COMPONENTS,
    payload,
});
export const setFilter = (payload) => ({
    type: SET_FILTER,
    payload,
});

export const removeAdvancedFilter = (payload) => ({
    type: REMOVE_ADVANCED_FILTER,
    payload,
});

export const addAdvancedFilter = (payload) => ({
    type: ADD_ADVANCED_FILTER,
    payload,
});
