export const SET_SEARCH_COMPONENT = "SET_SEARCH_COMPONENT";
export const SET_COMPONENT_DETAIL = "SET_COMPONENT_DETAIL";
export const SET_SELECTOR_COMPONENT = "SET_SELECTOR_COMPONENT";
export const CLEAN_VIEW_COMPONENTS = "CLEAN_VIEW_COMPONENTS";
export const SET_CARD_COMPONENT = "SET_CARD_COMPONENT";
export const GET_REACT_COMPONENTS = "GET_REACT_COMPONENTS";
export const SAVE_COMPONENT = "SAVE_COMPONENT";
export const CREATE_REACT_COMPONENT = "CREATE_REACT_COMPONENT";
export const SAVE_FILTERS = "SAVE_FILTERS";

export const setSearchComponent = (payload) => ({
    type: SET_SEARCH_COMPONENT,
    payload,
});

export const setComponentDetail = (payload) => ({
    type: SET_COMPONENT_DETAIL,
    payload,
});

export const setSelectorComponent = (payload) => ({
    type: SET_SELECTOR_COMPONENT,
    payload,
});

export const cleanViewComponents = (payload) => ({
    type: CLEAN_VIEW_COMPONENTS,
    payload,
});

export const setCardComponent = (payload) => ({
    type: SET_CARD_COMPONENT,
    payload,
});

export const getAllReactComponents = (payload) => ({
    type: GET_REACT_COMPONENTS,
    payload,
});

export const saveComponent = (payload) => ({
    type: SAVE_COMPONENT,
    payload,
});

export const createReactComponent = (payload) => ({
    type: CREATE_REACT_COMPONENT,
    payload,
});

export const saveFilters = (payload) => ({
    type: SAVE_FILTERS,
    payload,
});
