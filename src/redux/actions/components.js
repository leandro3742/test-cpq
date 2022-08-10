const COMPONENTS_INITIAL_STATE = "COMPONENTS_INITIAL_STATE";
const SET_COMPONENTS = "SET_COMPONENTS";
const FETCH_COMPONENTS = "FETCH_COMPONENTS";

export const componentsInitialState = (payload) => ({
    type: COMPONENTS_INITIAL_STATE,
    payload,
});

export const setComponents = (payload) => ({
    type: SET_COMPONENTS,
    payload,
});

export const fetchComponents = (payload) => ({
    type: FETCH_COMPONENTS,
    payload,
});
