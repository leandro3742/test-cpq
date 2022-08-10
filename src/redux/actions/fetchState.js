const FETCH_INITIAL_STATE = "FETCH_INITIAL_STATE";
const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchInitialState = (payload) => ({
    type: FETCH_INITIAL_STATE,
    payload,
});

export const fetchSuccess = (payload) => ({
    type: FETCH_SUCCESS,
    payload,
});
