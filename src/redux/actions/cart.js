export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const ADD_OTHER_COMPONENT = "ADD_OTHER_COMPONENT";
const SET_INITIAL_STATE_CART = "SET_INITIAL_STATE_CART";
const ADD_DISCOUNT = "ADD_DISCOUNT";

export const setInitialStateCart = (payload) => ({
    type: SET_INITIAL_STATE_CART,
    payload,
});
export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});

export const removeToCart = (payload) => ({
    type: REMOVE_TO_CART,
    payload,
});

export const addOtherComponent = (payload) => ({
    type: ADD_OTHER_COMPONENT,
    payload,
});

export const addDiscount = (payload) => ({
    type: ADD_DISCOUNT,
    payload,
});
