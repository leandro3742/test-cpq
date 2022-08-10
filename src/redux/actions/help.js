const SET_INITIAL_STATE_HELP = "SET_INITIAL_STATE_HELP";
const SET_HELP = "SET_HELP";

export const setInitialStateGtt = (payload) => ({
    type: SET_INITIAL_STATE_HELP,
    payload,
});

export const setHelp = (payload) => ({
    type: SET_HELP,
    payload,
});
