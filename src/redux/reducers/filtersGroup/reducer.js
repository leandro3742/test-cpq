const initialState = {};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_INITIAL_STATE_FILTERS_GROUP":
            return { ...state, ...action.payload };
        default:
            return { ...state };
    }
}
