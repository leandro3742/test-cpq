const SET_PAGES = "SET_PAGES";
const GET_PAGES = "GET_PAGES";
const FETCH_PAGES = "FETCH_PAGES";

export const setPages = (payload) => ({
    type: SET_PAGES,
    payload,
});

export const getPages = (payload) => ({
    type: GET_PAGES,
    payload,
});

export const fetchPages = (payload) => ({
    type: FETCH_PAGES,
    payload,
});
