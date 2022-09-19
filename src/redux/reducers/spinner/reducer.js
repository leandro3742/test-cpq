const initialState = {
    spinnerState: false
};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_SPINNER":
            return { ...state, spinnerState: action.payload };
        default:
            return { ...state };
    }
}
