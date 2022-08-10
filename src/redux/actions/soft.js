const SET_SOFT = "SET_SOFT";
const SET_INITIAL_STATE_SOFT = "SET_INITIAL_STATE_SOFT";

export const setInitialSoft = (payload) => ({
    type: SET_INITIAL_STATE_SOFT,
    payload,
});

export const setSoft = (payload) => ({
    type: SET_SOFT,
    payload,
});
