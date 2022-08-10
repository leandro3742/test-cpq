// import { SET_INITIAL_STATE } from "./gtt";
const SET_INITIAL_STATE_FILTERS_GROUP = "SET_INITIAL_STATE_FILTERS_GROUP";
const FILTER_COMPONENTS = "FILTER_COMPONENTS";

export const setInitialStateFiltersGroups = (payload) => ({
    type: SET_INITIAL_STATE_FILTERS_GROUP,
    payload,
});
export const filterComponents = (payload) => ({
    type: FILTER_COMPONENTS,
    payload,
});
