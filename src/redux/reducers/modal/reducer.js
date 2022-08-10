const initialState = {
    active: false,
    data: {},
};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SHOW_MODAL":
            return { ...{ active: true, data: action.payload } };
        case "CLOSE_MODAL":
            return { ...{ active: false, data: {} } };
        default:
            return { ...state };
    }
}
