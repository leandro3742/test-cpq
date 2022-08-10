const SET_COMPARE = "SET_COMPARE";
const REMOVE_COMPARE = "REMOVE_COMPARE";

export const setCompare = (payload) => ({
    type: SET_COMPARE,
    payload,
});

export const removeCompare = (payload) => ({
    type: REMOVE_COMPARE,
    payload,
});
