export const SET_COMPONENT_DETAIL = "SET_COMPONENT_DETAIL";
export const SET_CONFIGURATION = "SET_CONFIGURATION";
export const CLEAR_COMPONENT_DETAIL = "CLEAR_COMPONENT_DETAIL";
export const SET_COMPONENT = "SET_COMPONENT";
export const SET_TOP_LEVEL = "SET_TOP_LEVEL";
export const SET_INITIAL_STATE_GTT = "SET_INITIAL_STATE_GTT";

export const SET_PORT_SELECTED = "SET_PORT_SELECTED";
export const CHANGE_FEATURE = "CHANGE_FEATURE";

export const setInitialStateGtt = (payload) => ({
    type: SET_INITIAL_STATE_GTT,
    payload,
});

export const setPortSelected = (payload) => ({
    type: SET_PORT_SELECTED,
    payload,
});

// Eliminar, por ahora las dejo declaradas para no eliminar todos los componentes
export const setComponentDetail = (payload) => ({
    type: SET_COMPONENT_DETAIL,
    payload,
});

export const setConfiguration = (payload) => ({
    type: SET_CONFIGURATION,
    payload,
});

export const setComponent = (payload) => ({
    type: SET_COMPONENT,
    payload,
});

export const setTopLevel = (payload) => ({
    type: SET_TOP_LEVEL,
    payload,
});

export const clearComponentDetail = (payload) => ({
    type: CLEAR_COMPONENT_DETAIL,
    payload,
});

export const changeFeature = (payload) => ({
    type: CHANGE_FEATURE,
    payload,
});
