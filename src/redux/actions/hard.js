const SET_INITIAL_STATE_HARD = "SET_INITIAL_STATE_HARD";
const SET_HARD = "SET_HARD";

export const setInitialStateHard = (payload) => ({
    type: SET_INITIAL_STATE_HARD,
    payload,
});

export const setHard = (payload) => ({
    type: SET_HARD,
    payload,
});
