const initialState = { loading: true };

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "FETCH_INITIAL_STATE":
            return { ...state, ...action.payload };
        case "FETCH_SUCCESS":
            return { ...state, ...action.payload };
        default:
            return { ...state };
    }
}
